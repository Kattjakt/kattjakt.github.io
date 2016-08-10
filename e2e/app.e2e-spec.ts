import { KattjaktPage } from './app.po';

describe('kattjakt App', function() {
  let page: KattjaktPage;

  beforeEach(() => {
    page = new KattjaktPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
