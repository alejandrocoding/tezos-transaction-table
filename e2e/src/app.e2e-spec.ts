import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('Tezos Transaction App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });

  it('should display welcome message', () => {
    page.navigateTo();
    const title = 'Tezos Test - Large List of Transactions';
    expect(page.getTitleText()).toEqual(title.toUpperCase());
  });

  it('should have 10 transactions at start', async () => {
    page.navigateTo();
    const rowsSelector = 'table tbody tr';

    expect(element.all(by.css(rowsSelector)).count()).toBe(10);
  });

  it('should be possible to scroll in table', async () => {
    page.navigateTo();

    browser.executeScript(`document.querySelector('cdk-virtual-scroll-viewport').scrollTop = 50`);
    expect(browser.executeScript(`return document.querySelector('cdk-virtual-scroll-viewport').scrollTop;`)).toBe(50);

    browser.executeScript(`document.querySelector('cdk-virtual-scroll-viewport').scrollTop = 240`);
    expect(browser.executeScript(`return document.querySelector('cdk-virtual-scroll-viewport').scrollTop;`)).toBe(240);
  });
});
