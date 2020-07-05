import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { TransactionTableModule } from './transaction-table/transaction-table.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TransactionTableModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
