/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('draw', function() {
  beforeEach(() => {
    cy.visit(Cypress.env('app_host'));
  });
  it('Draw !', () => {
    cy.get('[data-cy=0]').click()
    cy.get('[data-cy=1]').click()
    cy.get('[data-cy=2]').click()

    cy.get('[data-cy=6]').click()
    cy.get('[data-cy=7]').click()
    cy.get('[data-cy=8]').click()

    cy.get('[data-cy=3]').click()
    cy.get('[data-cy=4]').click()
    cy.get('[data-cy=5]').click()
  })
})
