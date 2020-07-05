import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '@core/material.module';

import { TransactionTableComponent } from './transaction-table.component';
import { By } from '@angular/platform-browser';

import { TEZOS_USD } from '@constants';

describe('TransactionTableComponent', () => {
  let fixture: ComponentFixture<TransactionTableComponent>;
  let component: TransactionTableComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, MaterialModule],
      declarations: [TransactionTableComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have table HTML element', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('should have material virtual scroll', () => {
    const vScroll = fixture.debugElement.query(
      By.css('cdk-virtual-scroll-viewport')
    );
    expect(vScroll).toBeTruthy();
  });

  it(`should have table headers 'Type', 'Amount XTZ (USD)', 'Date', 'Address'`, () => {
    expect(component.headers).toEqual([
      'Type',
      'Amount XTZ (USD)',
      'Date',
      'Address',
    ]);
  });

  it('should show conversion from XTZ to USD correctly', () => {
    const usd1 = component.showXTZasUSD(1);
    const usd2 = component.showXTZasUSD(2501.69);

    expect(usd1).toBe(TEZOS_USD);
    expect(usd2).toBe(TEZOS_USD * 2501.69);
  });

  it('should show ellipsis correctly', () => {
    const address = 'ABC2374682648___12345';
    const ellipsis = component.showEllipsis(address);
    expect(ellipsis).toBe('AB...12345');
  });
});
