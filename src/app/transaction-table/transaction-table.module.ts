import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@core/material.module';
import { TransactionTableComponent } from './transaction-table.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { transactionsReducer } from './store/transaction.reducer';
import { TransactionEffects } from './store/transaction.effects';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        MaterialModule,
        FlexLayoutModule,
        StoreModule.forFeature('transactions', transactionsReducer),
        EffectsModule.forFeature([TransactionEffects]),
    ],
    declarations: [TransactionTableComponent],
    exports: [TransactionTableComponent],
})
export class TransactionTableModule {}
