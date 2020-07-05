import { createReducer, on, Action, createFeatureSelector } from '@ngrx/store';
import { fetchFirstsTransactions, fetchFirstsTransactionsLoadSuccess } from './transaction.actions';
import { fetchMoreTransactions, fetchMoreTransactionsLoadSuccess } from './transaction.actions';

import { Transaction, TransactionStore } from '@interfaces';

export const initialState: TransactionStore = {
    transactions: [] as Transaction[],
};

export const transactionState = createFeatureSelector<TransactionStore>('transactions');

const reducer = createReducer(
    initialState,
    // on(fetchFirstsTransactions, (state) => ({
    //     ...state, transactions: [...state.transactions]
    // })),
    on(fetchFirstsTransactions),
    on(fetchFirstsTransactionsLoadSuccess, (state, { payload }) => ({
        ...state, transactions: [...state.transactions, ...payload.transactions],
    })),
    // on(fetchMoreTransactions, (state) => ({
    //     ...state, transactions: [...state.transactions],
    // })),
    on(fetchMoreTransactions),
    on(fetchMoreTransactionsLoadSuccess, (state, { payload }) => ({
        ...state, transactions: [...state.transactions, ...payload.transactions],
    })),
);

export function transactionsReducer(state: TransactionStore, action: Action): TransactionStore {
    return reducer(state, action);
}
