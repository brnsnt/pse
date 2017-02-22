import { PsePrototypePage } from './app.po';

describe('pse-prototype App', () => {
  let page: PsePrototypePage;

  beforeEach(() => {
    page = new PsePrototypePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
