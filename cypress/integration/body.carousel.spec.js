/// <reference types ="Cypress"/>

describe('test for carousel function', () => {
    beforeEach(
        () => {
            cy.visit('https://nextbillionusers.google/'),
                cy.viewport(1440, 900),
                cy.contains('OK, Got it').click()
        }
    )

    //check 5 slides in the carousel
    it('hero should have 5 slides', () => {
        cy.get('.hero-home').find('.hero-home__slide').should('have.length', 5)
    })

    //check for slide 1 poster (API)
    it('check poster image API', () => {
        cy.request({
            method: 'GET',
            url: 'https://lh3.googleusercontent.com/c5zHgj4lS1-XmyhTsOjmkdFI78VxlwBBCh57PH9mZMNqNpZGyGvtm4gkZpryV9FSHrDWvMad9Sjh6xeAMQnnWbVefGh4DJ_jRVcMqA',

        }).then((res) => {
            expect(res.status).to.eq(200)
        })
    })

    //check for video source (muted version)
    it('check slider video src', () => {
        cy.get('.hero-home__slide').eq(0).find(`video source`).should('have.prop', 'src', 'https://kstatic.googleusercontent.com/files/85072df28d335b3bf752ecaa625afe35afe0cc7513f20c2a507e76897350684ad6d47f8aad7cdbd12bf25a0e7d5381f627a113bfcace4cbb0343238aac0ef5c0',)
    })

    //check for hero home button CTA on the left
    it('check for CTA button css and redirect', () => {
        cy.get('.hero-home__slide').eq(0).find('.hero-home__data > .hero-home__cta-container > .hero-home__cta').should('contain', "Watch Godwin's Story")
    })

    //check for hero home button CTA open youtube
    it('check for open youtube from CTA button', () => {
        cy.get('.hero-home__slide.is-active > .hero-home__data > .hero-home__cta-container > .hero-home__cta').should('have.attr', 'data-nbu-trigger-modal', "79ClzYfsPOg")
    })
})