import { LandeauAlexAngularexoPage } from './app.po';

describe('landeau-alex-angularexo App', function() {
  let page: LandeauAlexAngularexoPage;

  beforeEach(() => {
    page = new LandeauAlexAngularexoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
