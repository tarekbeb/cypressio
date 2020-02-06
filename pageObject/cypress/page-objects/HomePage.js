import BasePage from './BasePage'

class HomePage extends BasePage {
    visit(){
        cy.visit('http://zero.webappsecurity.com/index.html')
    }

    carouselIsVisible(){
        cy.get('#carousel').should('be.visible')
    }
}

export default HomePage;