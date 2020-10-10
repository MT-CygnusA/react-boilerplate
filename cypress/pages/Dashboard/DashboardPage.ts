export class DashboardPage {
  get visit() {
    return cy.visit('/dashboard');
  }

  get ensure() {
    return cy.get("[data-test-id='dashboardPage']");
  }
}
