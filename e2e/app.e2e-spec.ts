import { GaelicFlashPage } from './app.po';

describe('gaelic-flash App', () => {
  let page: GaelicFlashPage;

  beforeEach(() => {
    page = new GaelicFlashPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
