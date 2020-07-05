import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Transaction } from '@interfaces';

@Injectable({ providedIn: 'root' })
export class TransactionsService {

    private readonly baseURL: string;

    constructor(private http: HttpClient) {
        this.baseURL = 'https://api.tzstats.com/tables/op';
    }

    private mapTransaction(item: unknown): Transaction {
        return {
            id: item[0],
            type: item[1],
            date: item[2],
            address: item[3],
            amount: item[4],
        } as Transaction;
    }

    getTransactions(): Observable<Transaction[]> {
        const columns = `?columns=row_id,type,time,sender,volume`;
        const receiver = `&receiver=tz1gfArv665EUkSg2ojMBzcbfwuPxAvqPvjo`;
        const type = `&type=transaction`;
        const limit = `&limit=10`;

        const fullURL = `${this.baseURL}${columns}${receiver}${type}${limit}`;

        return this.http.get<any[]>(fullURL).pipe(
            map((array) =>
                array.map((item) => {
                    return {
                        id: item[0],
                        type: item[1],
                        date: item[2],
                        address: item[3],
                        amount: item[4],
                    } as Transaction;
                }),
            ),
        );
    }

    getTransactionsByLastId(id: number): Observable<Transaction[]> {
        const columns = `?columns=row_id,type,time,sender,volume`;
        const receiver = `&receiver=tz1gfArv665EUkSg2ojMBzcbfwuPxAvqPvjo`;
        const type = `&type=transaction`;
        const limit = `&limit=10`;
        const cursor = `&cursor.lte=${id}`;

        const fullURL = `${this.baseURL}${columns}${receiver}${type}${limit}${cursor}`;

        return this.http.get<any[]>(fullURL).pipe(map((array) => array.map((item) => this.mapTransaction(item))));
    }
}
