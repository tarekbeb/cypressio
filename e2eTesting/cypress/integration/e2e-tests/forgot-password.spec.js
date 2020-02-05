describe('Login Test', ()=>{
    before(()=>{
        cy.visit('http://zero.webappsecurity.com/')
        cy.url().should('include', 'zero')
    })
    it('Should display login form', ()=>{
        cy.get('#signin_button').click()
        cy.get('#login_form').should('be.visible')
    })
    it('Should display forgot password form', ()=>{
        cy.contains('Forgot your password').click()
        cy.get('#send_password_form').should('be.visible')
        cy.url().should('include', '/forgot-password.html')
    })
    it('Should submit forgotten password form',() =>{
        cy.get('#user_email').type('email@email.com')
        cy.contains('Send Password').click()
    })
    it('Should display success message', ()=>{
        cy.get('h3').contains('Forgotten Password')
        cy.url().should('include', '/forgotten-password-send.html')
    })
})