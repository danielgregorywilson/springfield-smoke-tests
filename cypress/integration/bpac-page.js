describe('BPAC Page', () => {
  it('successfully loads', () => {
    cy.visit( Cypress.env('bpacUrl') )
  })
  if ( !Cypress.env('isStaging') ) {
    it('has the correct sidebar', () => {
      cy.get('#sidebar').find('#nextendaccordionmenuwidget-7').find('.heading').contains('City Manager’s Office')
      cy.get('#sidebar').find('#nextend-accordion-menu-nextendaccordionmenuwidget-7').find('dt.level1').its('length').should('eq', 11)
    })
  }
})