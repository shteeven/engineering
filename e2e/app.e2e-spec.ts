import { EngineeringPage } from './app.po';

describe('engineering App', function() {
  let page: EngineeringPage;

  beforeEach(() => {
    page = new EngineeringPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
