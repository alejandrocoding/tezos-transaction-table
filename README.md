# TezosTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


<!-- <div class="transaction-table">
    <table mat-table [dataSource]="dataSource">

        <ng-container matColumnDef="table-title">
            <th mat-header-cell *matHeaderCellDef colspan="4">
                <span class="table-title-text">
                    <mat-icon class="icon">history</mat-icon> Recent Transactions
                </span>
            </th>
        </ng-container>

        <ng-container matColumnDef="type">
            <th mat-header-cell *matHeaderCellDef> Type </th>
            <td mat-cell *matCellDef="let element">
                <mat-chip-list [selectable]="false">
                    <mat-chip>{{element.type}}</mat-chip>
                </mat-chip-list>
            </td>
        </ng-container>

        <ng-container matColumnDef="amount">
            <th mat-header-cell *matHeaderCellDef> Amount XTZ (USD) </th>
            <td mat-cell *matCellDef="let element">
                <span class="amount-xtz"> {{element.amount | number:'1.1-1'}} XTZ</span>
                <span class="amount-usd"> {{element.amount | number:'1.1-1'}} USD</span>
            </td>
        </ng-container>

        <ng-container matColumnDef="date">
            <th mat-header-cell *matHeaderCellDef> Date </th>
            <td mat-cell *matCellDef="let element"> {{element.date | date:'MMM d yyyy, hh:mm'}} </td>
        </ng-container>

        <ng-container matColumnDef="address">
            <th mat-header-cell *matHeaderCellDef> Address </th>
            <td mat-cell *matCellDef="let element">
                {{ showEllipsis(element.address) }}
            </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="['table-title']; sticky: true"></tr>
        <tr mat-header-row *matHeaderRowDef="columns; sticky: true"></tr>
        <tr mat-row *matRowDef="let row; columns: columns;"></tr>
    </table>
</div> -->

<!-- <div class="transaction-table" fxLayout="columns wrap">
    <div class="header-title" fxFlexFill>
        <span class="table-title" fxLayoutAlign="start center">
            <mat-icon class="icon">history</mat-icon> Recent Transactions
        </span>
    </div>
    <div class="headers" fxFlexFill fxLayoutGap="12px">
        <span fxFlex *ngFor="let header of headers">{{ header }}</span>
    </div>
    <div class="body" fxFlexFill fxLayout="columns wrap">
        <div class="row" fxFlexFill fxLayout="row wrap" fxLayoutGap="12px" *ngFor="let transaction of dataSource">
            <div fxFlex>
                <mat-chip-list [selectable]="false">
                    <mat-chip>{{transaction.type}}</mat-chip>
                </mat-chip-list>
            </div>
            <div class="amounts" fxFlex>
                <span> {{transaction.amount | number:'1.1-1'}} XTZ</span>
                <span class="conversion"> {{transaction.amount | number:'1.1-1'}} USD</span>
            </div>
            <div fxFlex>{{ transaction.date | date:'MMM d yyyy, hh:mm' }}</div>
            <div fxFlex>{{ showEllipsis(transaction.address) }}</div>
        </div>
    </div>
</div> -->

