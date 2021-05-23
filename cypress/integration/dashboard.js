describe('Dashboard', () => {
    before(() => {
        Cypress.config('baseUrl', 'http://localhost:4200');
    });

    it('should redirect to the home page for an unauthorized user', () => {
        cy.vist('/dashboard').url().should('include', '/');
    });

})