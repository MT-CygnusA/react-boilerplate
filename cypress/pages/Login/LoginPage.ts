export class LoginPage {
  get visit() {
    return cy.visit('/login');
  }

  get ensure() {
    return cy.get("[data-test-id='loginPage']");
  }

  get username() {
    return cy.get('input[name=username');
  }

  get password() {
    return cy.get('input[name=password');
  }

  get submit() {
    return cy.get("[data-test-id='loginSubmit']");
  }
}

// dynamical page elements
export const getLoginMessage = (cy: Cypress.cy) => cy.get("[data-test-id='loginErrorMessage']");
