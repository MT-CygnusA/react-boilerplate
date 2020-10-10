import { DashboardPage, LoginPage } from '../../pages';

context('When user is on login page', () => {
  let page: LoginPage;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  beforeEach(() => {
    page = new LoginPage();
    page.visit;
    page.ensure;
    cy.fixture('User').as('user');
  });

  it('should successfully submit', () => {
    cy.route('POST', '/auth/login', 'fx:response/auth/loginSuccess').as('getTokenPayload');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    cy.get('@user').then((userJson: any) => {
      page.username.type(userJson.username);
      page.password.type(userJson.password);
      page.submit.click();
      cy.wait('@getTokenPayload');
      const dashboardPage = new DashboardPage();
      dashboardPage.ensure;
    });
  });

  // it('should handle expired token', () => {
  //   cy.login();
  //   const dashboardPage = new DashboardPage();
  //   cy.route({
  //     method: 'GET',
  //     url: '/reviews',
  //     status: 401,
  //     response: 'fx:response/reviews/expiredToken',
  //   }).as('getReviews');
  //   dashboardPage.visit;
  //   cy.wait('@getReviews');
  //   page.ensure;
  // });
});
