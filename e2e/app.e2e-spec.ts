import { LolStatsLookupPage } from './app.po';

describe('lol-stats-lookup App', () => {
  let page: LolStatsLookupPage;

  beforeEach(() => {
    page = new LolStatsLookupPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
