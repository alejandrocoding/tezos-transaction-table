import { Transaction } from './transaction.interface';

export interface TransactionStore {
    transactions: Transaction[];
}
