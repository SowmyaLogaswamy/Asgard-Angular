import { AsgardAngularPage } from './app.po';

describe('asgard-angular App', () => {
  let page: AsgardAngularPage;

  beforeEach(() => {
    page = new AsgardAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
