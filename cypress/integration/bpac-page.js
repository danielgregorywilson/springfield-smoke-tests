describe('BPAC Page', () => {
  it('successfully loads', () => {
    cy.visit( Cypress.env('bpacUrl') )
  })
  it('has the correct title', () => {
    cy.contains('Bicycle & Pedestrian Advisory Committee')
  })
  if ( !Cypress.env('isStaging') ) {
    it('has the correct sidebar', () => {
      cy.get('#sidebar').find('#nextendaccordionmenuwidget-2').find('.heading').contains('Development & Public Works')
      cy.get('#sidebar').find('#nextend-accordion-menu-nextendaccordionmenuwidget-2').find('dt.level1').its('length').should('eq', 8)
    })
  }
})