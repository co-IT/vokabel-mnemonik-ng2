import { VocableStoriesPage } from './app.po';

describe('vocable-stories App', function() {
  let page: VocableStoriesPage;

  beforeEach(() => {
    page = new VocableStoriesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
