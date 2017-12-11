describe('My First Test', function () {
    it('Does not do much!', function () {
        expect(true).to.equal(true)
    })

    it('Does not do much!', function () {
        expect(true).to.equal(false)
    })

    it('Visits the Kitchen Sink', () => {
        cy.visit('https://example.cypress.io')
    })

    it('finds the content "type"', () => {
        cy.visit('https://example.cypress.io')

        cy.contains('type')
    })

    it('clicks the content "type"', () => {
        cy.visit('https://example.cypress.io')

        cy.contains('type').click()
    })

    it('clicking "type" ngvigates to a new url', () => {
        cy.visit('https://example.cypress.io')

        cy.contains('type').click()

        cy.url().should('include', '/commands/actions')
    })

    it('gets, types and asserts', () => {
        cy.visit('https://example.cypress.io')

        cy.contains('type').click()

        cy.url().should('include', '/commands/actions')

        cy.get('.action-email')
        .type('fake@email.com')
        .should('have.value', 'fake@email.com')
    })

    it('clicking "type" shows the right headings', () => {
        cy.visit('https://example.cypress.io')

        cy.pause()

        cy.contains('type').click()

        cy.url().should('include', '/commands/actions')

        cy.get('.action-email')
        .type('fake@email.com')
        .should('have.value', 'fake@email.com')
    })
})