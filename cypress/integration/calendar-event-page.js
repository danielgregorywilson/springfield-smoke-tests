describe('Calendar Event Page', () => {
  it('successfully loads', () => {
    cy.visit( Cypress.env('calendarEventUrl') )
  })
  it('has the correct content', () => {
    cy.contains('Springfield Library Advisory Board meeting')
    cy.contains('July 6 @ 5:30 pm - 7:00 pm')
    cy.contains('The Library Board advises the Springfield City Council and City Manager on issues related to Library development, services, and policies.')
  })
})