describe('Login Failed Test', ()=>{
    before(()=>{
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', '/index.html')
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
describe('Login Succeeded Test', ()=>{
    before(()=>{
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', '/index.html')
    })
    it('Should display login form', ()=>{
        cy.get('#signin_button').click()
        cy.get('#login_form').should('be.visible')
    })
    it('Should login to application', ()=>{
        cy.loginToApp('username', 'password')
    })
    it('Should display navbar links', ()=>{
        cy.get('#account_summary_tab').should('be.visible')
        cy.get('#account_activity_tab').should('be.visible')
        cy.get('#transfer_funds_tab').should('be.visible')
        cy.get('#pay_bills_tab').should('be.visible')
        cy.get('#money_map_tab').should('be.visible')
        cy.get('#online_statements_tab').should('be.visible')
    })
    it('Should logout from application', ()=>{
        cy.get('.icon-user').click()
        cy.get('#logout_link').click()
        cy.url().should('include', '/index.html')
    })
})