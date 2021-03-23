/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('winner x', function() {
  beforeEach(() => {
    cy.visit(Cypress.env('app_host'));
  });
  it('Winner: X', () => {
    cy.get('[data-cy=0]').click()
    cy.get('[data-cy=1]').click()
    cy.get('[data-cy=2]').click()
    cy.get('[data-cy=3]').click()
    cy.get('[data-cy=4]').click()
    cy.get('[data-cy=5]').click()
    cy.get('[data-cy=6]').click()
    cy.get('[data-e2e="status"]').should('have.text', 'Winner: X');
  })
})
