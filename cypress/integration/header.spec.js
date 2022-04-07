/// <reference types ="Cypress"/>

describe('test for header links', () => {
    beforeEach(() => {
        cy.visit('https://nextbillionusers.google/')
        cy.viewport(1440, 900)
        cy.contains('OK, Got it').click()
    }
    )
    //"Google" logo, "Next Billion Users"
    it('should redirect to GNBU website when click Google logo or "NBU" logo', () => {
        cy.get('#drawer .glue-header__tier :nth-child(1) .glue-header__lock-up .glue-header__logo .glue-header__logo-link').click()
        //cy.get('.glue-header__bar--mobile > .glue-header__tier > .glue-header__container > .glue-header__lock-up > .glue-header__logo > .glue-header__logo-link').click() //find a better way to do this -> flaky (dependent on structure)
        cy.url().should('equal', 'https://nextbillionusers.google/')
    })

    //"Product Stories"
    it('should redirect to /product-stories/ when click "Product Stories"', () => {
        cy.get('.glue-header__list > :nth-child(2)').click()
        cy.url().should('contain', '/product-stories/')
    })

    //"Research"
    it('should redirect to /research/ when click "Research"', () => {
        cy.get('.glue-header__list > :nth-child(3)').click()
        cy.url().should('contain', '/our-research/')
    })

    // "Tools"
    it('should redirect to /tools/ when click "Tools"', () => {
        cy.get('.glue-header__list > :nth-child(4)').click()
        cy.url().should('contain', '/tools/')
    })

    // "Events"
    it('should redirect to /events/ when click "Events"', () => {
        cy.get('.glue-header__list > :nth-child(5)').click()
        cy.url().should('contain', '/events/')
    })

    // "Press Center"
    it('should redirect to /press-center/ when click "Press Center"', () => {
        cy.get('.glue-header__list > :nth-child(6)').click()
        cy.url().should('contain', '/press-center/')
    })

    // "Blog"
    it('should redirect to https://www.blog.google/technology/next-billion-users/ when click "Blog"', () => {
        cy.get('.glue-header__list > :nth-child(7) a[href="https://www.blog.google/technology/next-billion-users/"]').should('have.attr', 'target', '_blank') 
        //test the thing triggering the browser to perform this behavior - as opposed to testing the behavior itself. No multi-tabs support.
    })

    // it('hero title should be "Building for everyone, everywhere." ', () => {
    //     cy.get('.hero-home__title-container h1').wait(2000).should('contain', 'Building for everyone, everywhere.')
    // })

    // it('should load /a-z/ when click "Explore" ', () => {
    //     cy.get('.nbu-butter-bar__body-link').should('have.attr', 'href', "/a-z/")
    // })
})