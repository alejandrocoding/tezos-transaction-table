import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TransactionTableModule } from './transaction-table/transaction-table.module';
import { TransactionTableComponent } from './transaction-table/transaction-table.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TransactionTableModule],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have title', () => {
    const title = fixture.debugElement.query(By.css('.title'));
    expect(title).toBeTruthy();
  });

  it(`should have as title 'Tezos Test - Large List of Transactions'`, () => {
    const title = fixture.debugElement.query(By.css('.title'));
    const titleText = (title.nativeElement as HTMLElement).textContent;
    expect(titleText).toBe('Tezos Test - Large List of Transactions');
  });

  it('should contain TransactionTableComponent', () => {
    const table = fixture.debugElement.query(By.directive(TransactionTableComponent));
    expect(table).toBeTruthy();
  });
});
