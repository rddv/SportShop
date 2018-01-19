import { SportShopPage } from './app.po';

describe('sport-shop App', function() {
  let page: SportShopPage;

  beforeEach(() => {
    page = new SportShopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
