describe('Homepage', () => {
  it('successfully loads', () => {
    cy.visit( Cypress.env('baseUrl') )
  })
  it('has news items', () => {
    cy.get('#news-home').contains('News')
    cy.get('#news-home').find('.slick-track').find('.slick-slide').its('length').should('eq', 2)
  })
  it('has events listings', () => {
    cy.get('#upcoming-events-home').contains('Upcoming Events')
    cy.get('#upcoming-events-home').find('.fusion-events-wrapper').find('.fusion-events-post').its('length').should('eq', 3)
  })
  it('has focus on items', () => {
    cy.contains('Focus On')
  })
})