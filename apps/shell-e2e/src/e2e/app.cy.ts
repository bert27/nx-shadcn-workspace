describe('shell-e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should load the primary module', () => {
    cy.contains('Cargando módulo...').should('exist');
    cy.contains('Cargando módulo...').should('not.exist');

    cy.get('#app-primary').should('exist');
  });

  it('should navigate to secondary module', () => {
    // Click usando el id
    cy.get('#nav-other').click();

    // Espera al fallback de Suspense
    cy.contains('Cargando módulo...', { timeout: 10000 }).should('exist');
    cy.contains('Cargando módulo...', { timeout: 10000 }).should('not.exist');

    // Comprueba que el módulo secundario se renderizó
    cy.get('#app-secondary', { timeout: 10000 }).should('exist');
  });
});
