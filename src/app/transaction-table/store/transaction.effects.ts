import { Injectable } from '@angular/core';

import { Actions, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { fetchFirstsTransactions, fetchFirstsTransactionsLoadSuccess,  } from './transaction.actions';
import { fetchMoreTransactions, fetchMoreTransactionsLoadSuccess,  } from './transaction.actions';

import { TransactionsService } from '@services';

@Injectable()
export class TransactionEffects {
    loadTransactions$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(fetchFirstsTransactions),
            mergeMap(() =>
                this.transactionsService.getTransactions().pipe(
                    map((transactions) => ({ type: fetchFirstsTransactionsLoadSuccess.type, payload: { transactions } })),
                    catchError(() => EMPTY),
                ),
            ),
        );
    });

    loadMoreTransactions$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(fetchMoreTransactions),
            mergeMap((action) =>
                this.transactionsService.getTransactionsByLastId(action.payload.id).pipe(
                    map((transactions) => ({ type: fetchMoreTransactionsLoadSuccess.type, payload: { transactions } })),
                    catchError(() => EMPTY),
                ),
            ),
        );
    });

    constructor(private actions$: Actions, private transactionsService: TransactionsService) {}
}
