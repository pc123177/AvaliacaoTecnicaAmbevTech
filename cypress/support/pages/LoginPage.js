class LoginPage {
    visit() {
      cy.visit('/login'); 
    }
  
    fillEmail(email) {
        cy.get('[data-testid="email"]').type(email);
    }
  
    fillPassword(password) {
        cy.get('[data-testid="senha"]').type(password);
    }
  
    clearEmail() {
        cy.get('[data-testid="email"]').clear(); 
    }
  
    clearPassword() {
        cy.get('[data-testid="senha"]').clear(); 
    }
  
    submit() {
        cy.get('[data-testid="entrar"]').click();
    }
  
    validateErrorMessage(message) {
      cy.contains(message).should('be.visible');
    }
  
    validateLoginSuccess() {
      cy.url().should('include', '/home'); 
      cy.contains('Fulano da Silva').should('be.visible'); 
    }
  }
  
  export default new LoginPage();
  