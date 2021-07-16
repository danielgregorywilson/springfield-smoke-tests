describe('Calendar Page', () => {
  if ( !Cypress.env('isStaging') ) {
    it('successfully loads', () => {
      cy.visit( Cypress.env('calendarUrl') )
    })
    it('has the correct content', () => {
      cy.contains('Events for ')
      cy.get('.tribe-events-calendar').its('length').should('eq', 1)
      cy.get('.tribe_events').its('length').should('gte', 1)
    })
  }
})