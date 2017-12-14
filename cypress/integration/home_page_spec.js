describe('Login page', () => {
    beforeEach(() => {
    })

    afterEach(() => {
    })

    it('Login reject', () => {
        cy.clock()

        cy.visit('/', {
            onBeforeLoad(win) {
                let stubFetch = cy.stub(win, 'fetch')

                stubFetch.callsFake(() => Promise.reject(''))

                stubFetch.withArgs('http://localhost:2000/login', {
                    method: 'post',
                    body: JSON.stringify({
                        userName: 'Jacob@email.com',
                        passWord: '123456',
                    }),
                })
                    .returns(Promise.reject('UserName or password is wrong.'))
            }
        })

        cy.get('#username').type('Jacob@email.com').should('have.value', 'Jacob@email.com')
        cy.get('#password').type('123456').should('have.value', '123456')
        cy.get('#loginButton').click()
        // cy.tick(500)
        cy.get('#loginErrorMessage').contains('UserName or password is wrong.').and('have.css', 'color')
    })

    it('Something throw error', () => {
        cy.clock()

        cy.visit('/', {
            onBeforeLoad(win) {
                let stubFetch = cy.stub(win, 'fetch')

                stubFetch.callsFake(() => { throw new Error('Something throw error') })
            }
        })

        cy.get('#username').type('Jacob@email.com').should('have.value', 'Jacob@email.com')
        cy.get('#password').type('123456').should('have.value', '123456')
        cy.get('#loginButton').click()
        // cy.tick(500)
        cy.get('#loginErrorMessage').contains('Something throw error').and('have.css', 'color')
    })

    it('Login success', () => {
        cy.clock()

        cy.visit('/', {
            onBeforeLoad(win) {
                let stubFetch = cy.stub(win, 'fetch')

                stubFetch.callsFake(() => Promise.reject(''))

                stubFetch.withArgs('http://localhost:2000/login', {
                    method: 'post',
                    body: JSON.stringify({
                        userName: 'Jacob@email.com',
                        passWord: '123456',
                    }),
                })
                    .returns(Promise.resolve())
            }
        })

        cy.get('#username').type('Jacob@email.com').should('have.value', 'Jacob@email.com')
        cy.get('#password').type('123456').should('have.value', '123456')
        cy.get('#loginButton').click()
        // cy.tick(500)
    })
})