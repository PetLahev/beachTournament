import { BeachTournamentPage } from './app.po';

describe('beach-tournament App', () => {
  let page: BeachTournamentPage;

  beforeEach(() => {
    page = new BeachTournamentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
