import { ReadingsPage } from './app.po';

describe('readings App', function() {
  let page: ReadingsPage;

  beforeEach(() => {
    page = new ReadingsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
