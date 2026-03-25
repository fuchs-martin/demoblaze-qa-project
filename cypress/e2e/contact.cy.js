describe('Contact form validation', () => {
  it('should allow submitting the contact form with empty fields', () => {
    // Handle uncaught exception related to modal transition
    cy.on('uncaught:exception', (err) => {
      if (err.message.includes('Modal is transitioning')) {
        return false
      }
    })

    // Verify that the homepage is displayed
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get('#nava').should('be.visible')
    cy.contains('PRODUCT STORE').should('be.visible')

    // Click on the "Contact" button
    cy.get(':nth-child(2) > .nav-link').should('be.visible').click()

    // Verify that the "New Message" modal is displayed
    cy.get('#exampleModal').should('be.visible')
    cy.get('#exampleModalLabel').should('contain.text', 'New message')

    // Leave all fields empty and submit the form
    cy.on('window:alert', (text) => {
      expect(text).to.equal('Thanks for the message!!')
    })

    cy.get('#exampleModal .btn-primary').click()

  })
})