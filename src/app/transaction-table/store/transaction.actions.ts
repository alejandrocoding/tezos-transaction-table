import { createAction, props } from '@ngrx/store';
import { Transaction } from '@interfaces';

// Load First Transactions
export const fetchFirstsTransactions = createAction('[Transactions Table Component] Fetch Firsts');
export const fetchFirstsTransactionsLoadSuccess = createAction(
    '[Transactions API] Fetch Firsts Transactions Load Success',
    props<{ payload: { transactions: Transaction[] } }>(),
);

// Load More Transactions
export const fetchMoreTransactions = createAction(
    '[Transactions Table Component] Fetch More',
    props<{ payload: { id: number } }>(),
);
export const fetchMoreTransactionsLoadSuccess = createAction(
    '[Transactions API] Fetch More Transactions Load Success',
    props<{ payload: { transactions: Transaction[] } }>(),
);
