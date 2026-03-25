describe('Cart flow', () => {
  it('should add a phone product to the cart successfully', () => {
    // Verify that the homepage is displayed
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get('#nava').should('be.visible')
    cy.contains('PRODUCT STORE').should('be.visible')

    // Click on the "Phones" category
    cy.get('[onclick="byCat(\'phone\')"]').should('be.visible').click()

    // Store first product name and open product detail
    cy.get('.card-title a')
      .first()
      .should('be.visible')
      .invoke('text')
      .then((text) => {
        const productName = text.trim()
        cy.wrap(productName).as('productName')
      })

    cy.get('.card-title a')
      .first()
      .click()

    // Verify that the product detail page is displayed
    cy.get('@productName').then((productName) => {
      cy.get('.name')
        .should('be.visible')
        .and('contain.text', productName)
    })

    cy.contains('Product description').should('be.visible')

    // Store product price
    cy.get('.price-container')
      .should('be.visible')
      .invoke('text')
      .then((text) => {
        const productPrice = text.match(/\d+/)[0]
        cy.wrap(productPrice).as('productPrice')
      })

    // Verify alert after adding product to cart
    cy.on('window:alert', (text) => {
      expect(text).to.equal('Product added')
    })

    // Click on "Add to cart"
    cy.get('.col-sm-12 > .btn').should('be.visible').click()

    // Go to cart page
    cy.get('#cartur').should('be.visible').click()

    // Verify product is added to cart
    cy.get('#tbodyid').should('be.visible')

    cy.get('@productName').then((productName) => {
      cy.contains('#tbodyid td', productName).should('be.visible')
    })

    cy.get('@productPrice').then((productPrice) => {
      cy.contains('#tbodyid td', productPrice).should('be.visible')
      cy.get('#totalp').should('be.visible').and('have.text', productPrice)
    })
  })
})