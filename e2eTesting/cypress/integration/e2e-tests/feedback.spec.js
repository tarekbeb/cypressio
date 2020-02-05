describe('Navbar Test', ()=> {
    before(()=>{
        cy.visit('http://zero.webappsecurity.com/')
        cy.url().should('include', 'zero')
    })
    it('Should display feedback form', ()=>{
        cy.get('#feedback').as('link_feedback')
        cy.get('@link_feedback').click()
        cy.get('#feedback-title').should('be.visible')
        cy.get('form').should('be.visible')
    })
    it('Should submit form', ()=>{
        cy.get('#name').as('input_name')
        cy.get('#email').as('input_email')
        cy.get('#subject').as('input_subject')
        cy.get('#comment').as('input_comment')

        cy.get('@input_name').type('test name')
        cy.get('@input_email').type('test@mail.com')
        cy.get('@input_subject').type('test subject')
        cy.get('@input_comment').type('test comment')
        cy.contains('Send Message').click()
    })
    it('Should display success message', ()=>{
        cy.get('#feedback-title').should('be.visible')
    })
})