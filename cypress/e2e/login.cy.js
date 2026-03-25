describe('User authentication flow', () => {
  it('should register, log in, and log out successfully', () => {
    const username = `user_${Date.now()}`
    const password = 'TestPassword123!'

    // Verify that the homepage is displayed
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get('#nava').should('be.visible')
    cy.contains('PRODUCT STORE').should('be.visible')

    // Click on the "Sign up" button
    cy.get('#signin2').should('be.visible').click()

    // Verify that the "Sign up" modal is displayed
    cy.get('#signInModal').should('be.visible')
    cy.get('#signInModalLabel').should('contain.text', 'Sign up')

    // Enter a valid username and password
    cy.get('#sign-username')
      .should('be.visible')
      .clear()
      .click()
      .type(username, { delay: 50 })

    cy.get('#sign-password')
      .should('be.visible')
      .clear()
      .click()
      .type(password, { delay: 50 })

    // Verify alert after successful sign up
    cy.on('window:alert', (text) => {
      expect(text).to.equal('Sign up successful.')
    })

    // Click the "Sign up" button
    cy.get('#signInModal .btn-primary').click()

    // Click on the "Log in" button
    cy.get('#login2').should('be.visible').click()

    // Verify that the "Log in" modal is displayed
    cy.get('#logInModal').should('be.visible')
    cy.get('#logInModalLabel').should('contain.text', 'Log in')

    // Enter the registered username and password
    cy.get('#loginusername')
      .should('be.visible')
      .clear()
      .click()
      .type(username, { delay: 50 })

    cy.get('#loginpassword')
      .should('be.visible')
      .clear()
      .click()
      .type(password, { delay: 50 })

    // Click the "Log in" button
    cy.get('#logInModal .btn-primary').click()

    // Verify that the user is logged in successfully
    cy.get('#nameofuser').should('be.visible').and('contain.text', `Welcome ${username}`)
    cy.get('#logout2').should('be.visible')
    cy.get('#login2').should('not.be.visible')

    // Click on the "Log out" button
    cy.get('#logout2').click()

    // Verify that the "Log in" button is visible again
    cy.get('#login2').should('be.visible')
    cy.get('#nameofuser').should('not.be.visible')
  })
})