describe('Action Test', () => {
  before(() => {
      //runs once before all tests in the block
  })
  after(() => {
      //runs once after all tests in the block
  })
  beforeEach(() => {
      //runs before each test in the block
      cy.visit('https://devexpress.github.io/testcafe/example/')
  })
  afterEach(() => {
      //runs before each test in the block
  })
  it('Submit developer name', () => {
      cy.get('#developer-name').type('name')
      cy.get('#submit-button').scrollIntoView()
      cy.get('#submit-button').click()

      cy.get('.result-content').should('be.visible')
      cy.url().should('include', 'thank-you')
  })
  it('Should enable slider', () => {
      cy.get('#slider').as('slider')

      cy.get('@slider').should('have.class', 'ui-state-disabled')
      cy.get('#tried-test-cafe').click()
      cy.get('@slider').should('not.have.class', 'ui-state-disabled')
  })
  it('should have empty value by detfault', () => {
      cy.get('#comments').as('textArea')

      cy.get('#tried-test-cafe').click()
      cy.get('@textArea').should('have.value', '')
      cy.get('@textArea').type('new value')
      cy.get('@textArea').should('have.value', 'new value')
  })
})