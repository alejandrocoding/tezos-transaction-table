import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CdkVirtualScrollViewport, ScrollDispatcher } from '@angular/cdk/scrolling';

import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';

import { TRANSACTION_LIMIT } from '@constants';
import { Transaction, TransactionStore } from '@interfaces';
import { addressEllipsis, convertXTZtoUSD } from '@helpers';

import { transactionState } from './store/transaction.reducer';
import {
    fetchFirstsTransactions,
    fetchMoreTransactions,
    fetchMoreTransactionsLoadSuccess,
} from './store/transaction.actions';

@Component({
    selector: 'app-transaction-table',
    templateUrl: './transaction-table.component.html',
    styleUrls: ['./transaction-table.component.scss'],
})
export class TransactionTableComponent implements OnInit, AfterViewInit {
    headers = ['Type', 'Amount XTZ (USD)', 'Date', 'Address'];
    transactions: Transaction[] = [];

    @ViewChild(CdkVirtualScrollViewport) virtualScroll: CdkVirtualScrollViewport;

    private transactions$ = this.store.select(transactionState).pipe(map((state) => state.transactions));
    private destroy$ = new Subject();

    constructor(
        private actions$: Actions,
        private store: Store<TransactionStore>,
        private scrollDispatcher: ScrollDispatcher,
    ) {}

    ngOnInit(): void {
        this.transactions$.subscribe((transactions) => (this.transactions = [...transactions]));
        this.store.dispatch({ type: fetchFirstsTransactions.type });
        this.subscribeToActions();
    }

    ngAfterViewInit(): void {
        this.subscribeToScrollDown();
    }

    private subscribeToActions(): void {
        this.actions$.pipe(ofType(fetchMoreTransactionsLoadSuccess)).subscribe(() => {
            this.virtualScroll.setRenderedRange({
                start: this.virtualScroll.getRenderedRange().end,
                end: this.virtualScroll.getRenderedRange().end + TRANSACTION_LIMIT,
            });
            if (this.virtualScroll.getRenderedRange().end >= TRANSACTION_LIMIT * 2) {
                this.virtualScroll.scrollToIndex(this.virtualScroll.getRenderedRange().end - TRANSACTION_LIMIT);
            }
        });
    }

    private subscribeToScrollDown(): void {
        this.scrollDispatcher
            .scrolled()
            .pipe(
                filter(() => this.virtualScroll.measureScrollOffset('bottom') === 0),
                takeUntil(this.destroy$),
            )
            .subscribe(() => {
                const lastElementId = this.transactions[this.transactions.length - 1].id;
                this.addTransactionsByLastId(lastElementId);
            });
    }

    addTransactionsByLastId(lastTransactionId: number): void {
        this.store.dispatch({ type: fetchMoreTransactions.type, payload: { id: lastTransactionId } });
    }

    showXTZasUSD(xtz: number): number {
        return convertXTZtoUSD(xtz);
    }

    showEllipsis(address: string): string {
        return addressEllipsis(address);
    }
}
