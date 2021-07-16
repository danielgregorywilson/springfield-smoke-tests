describe('City Manager Page', () => {
  it('successfully loads', () => {
    cy.visit( Cypress.env('cityManagerUrl') )
  })
  it('has a title', () => {
    cy.contains('City Manager’s Office')
  })
  it('has a photo', () => {
    cy.get('.wp-image-22958')
      .should('be.visible')
      .and(($img) => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
  })
  it('has the expected body text', () => {
    cy.contains('Dear Springfield,')
    cy.contains('A little about the City Manager’s Office')
  })
  if ( !Cypress.env('isStaging') ) {
    it('has the contact section', () => {  
      cy.contains('Contact Us')
      cy.contains('Hours')
      cy.contains('Public Information Officer')
    })
  }
  if ( !Cypress.env('isStaging') ) {
    it('has the correct sidebar', () => {
      cy.get('#sidebar').find('#nextendaccordionmenuwidget-7').find('.heading').contains('City Manager’s Office')
      cy.get('#sidebar').find('#nextend-accordion-menu-nextendaccordionmenuwidget-7').find('dt.level1').its('length').should('eq', 11)
    })
  }
})