import { FundItPage } from './app.po';

describe('fund-it App', function() {
  let page: FundItPage;

  beforeEach(() => {
    page = new FundItPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
