describe('Navbar Test', ()=> {
    before(()=>{
        cy.visit('http://zero.webappsecurity.com/')
        cy.url().should('include', 'zero')
    })
    it('Should display online banking content', ()=>{
        cy.get('#onlineBankingMenu').as('link_onlineBanking')
        cy.get('@link_onlineBanking').click()
        cy.get('h1').as('title')
        cy.get('@title').contains('Online Banking')
        cy.get('#online_banking_features').should('be.visible')
    })
    it('Should display feedback content', ()=>{
        cy.get('#feedback').as('link_feedback')
        cy.get('@link_feedback').click()
        cy.get('#feedback-title').should('be.visible')
    })
    it('Should nvaigate to homepage via logo', ()=>{
        cy.get('.brand').as('logo')
        cy.get('@logo').click()
        cy.url().should('include', 'http://zero.webappsecurity.com/')
    })
})