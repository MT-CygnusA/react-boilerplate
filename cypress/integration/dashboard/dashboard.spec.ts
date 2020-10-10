import { DashboardPage } from '../../pages';

context('When user is on dashboard page', () => {
  let page: DashboardPage;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  beforeEach(() => {
    page = new DashboardPage();
    page.visit;
    page.ensure;
    cy.fixture('User').as('user');
  });
});
