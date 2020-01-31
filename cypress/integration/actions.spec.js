describe('Action Test', () => {
  before(function(){
      //runs once before all tests in the block
  })
  after(function(){
      //runs once after all tests in the block
  })
  beforeEach(function(){
      //runs before each test in the block
      cy.visit('https://devexpress.github.io/testcafe/example/')
  })
  afterEach(function(){
      //runs before each test in the block
  })
  it('Submit developer name', function(){
      cy.get('#developer-name').type('name')
      cy.get('#submit-button').scrollIntoView()
      cy.get('#submit-button').click()

      cy.get('.result-content').should('be.visible')
      cy.url().should('include', 'thank-you')
  })
  it('Should enable slider', function(){
      cy.get('#slider').as('slider')
      cy.get('@slider').should('have.class', 'ui-state-disabled')
      cy.get('#tried-test-cafe').click()
      cy.get('@slider').should('not.have.class', 'ui-state-disabled')
  })
})