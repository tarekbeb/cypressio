describe('Login Test', ()=>{
    before(()=>{
        cy.visit('http://zero.webappsecurity.com/')
        cy.url().should('include', 'zero')
    })
    it('Should display login form', ()=>{
        cy.get('#signin_button').click()
        cy.get('#login_form').should('be.visible')
    })
    it('Should login to application', ()=>{
        cy.loginToApp('name', 'password')
    })
    it('Should display error message', ()=>{
        cy.get('.alert-error').should('be.visible')
    })
})