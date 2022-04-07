/// <reference types = "cypress" />

describe('"About" section test', () => {
    beforeEach(
        () => {
            cy.visit('https://nextbillionusers.google/'),
                cy.viewport(1440, 900),
                cy.contains('OK, Got it').click()
        }
    )
    //------------------------------
    //content in #1 block 
    //------------------------------

    //check for text in about section #1 block
    it('check for correct text in "About" section in #1 block', () => {
        cy.get('.nbu-content-section-text').eq(0).find('h2').should('contain', 'Every week, millions of people come online for the first time.')
        cy.get('.nbu-content-section-body').eq(0).should('contain', 'Everyone — no matter their location, language or digital literacy — deserves an internet that was made for them. Google’s Next Billion Users initiative conducts research and builds products for people around the world.')
    })

    //check for image API in #1 block
    it('check image API #1 block', () => {
        cy.request({
            method: 'GET',
            url: 'https://lh3.googleusercontent.com/iY_0dXEfv62h5Q6a7MlSNnV68ZScSX6brrISnECYr8lITZfQ6Hkx6RNYDYemxKkk4wLuBpdrtJp7YbPPKdYCZaBAV3GN-vASRUbzyKs=rwa-s830',
        }).then((res) => {
            expect(res.status).to.eq(200)
        })
    })

    //check button redirect in #1 block
    it('check button redirect to audio lens #1 block', () => {
        cy.get('.nbu-content-section-buttons > a').eq(0).should('have.attr', 'href', '/#audioquote_lens')
    })


    //------------------------------
    //content in #2 block 
    //------------------------------


    //check for text in about section #2 block
    it('check for correct text in "About" section in #2 block', () => {
        cy.get('.nbu-content-section-text').eq(1).find('h2').should('contain', 'The internet is evolving, influenced more than ever by those coming online for the first time.')
        cy.get('.nbu-content-section-body').eq(1).should('contain', 'The technology industry—and its partners in government, business and society—has a unique opportunity to learn and work with these new users on creating products that are both relevant to their needs and usable in their context.')
    })

    //check for image API in #2 block
    it('check image API in #2 block', () => {
        cy.request({
            method: 'GET',
            url: 'https://lh3.googleusercontent.com/larGkuRzC3zaY4VDFHCH38tQxpgEezl0CeftSBBZ-RcY-NC-VZJuqisatC01MICBI7_64OnpcBrrFRf5F6Y6te07BGpa4_oq2zGpVK9Ta83c6JE3og=rwa-s614',
        }).then((res) => {
            expect(res.status).to.eq(200)
        })
    })

    //check button redirect in #2 block
    it('check button redirect to audio lens in #2 block', () => {
        cy.get('.nbu-content-section-buttons > a').eq(1).should('have.attr', 'href', 'a-z/')
    })


    //------------------------------
    //content in #3 block 
    //------------------------------

    //check for text in about section #3 block
    it('check for correct text in "About" section in #3 block', () => {
        cy.get('.nbu-content-section-text').eq(2).find('h2').should('contain', 'People are at the center of everything we build')
        cy.get('.nbu-content-section-body').eq(2).should('contain', 'The vast majority of people using the internet for the first time are doing so via a mobile device — not a computer. They often share devices with friends and family, and tend to prefer voice and visuals over typing or reading. By uncovering insights like these through user research, we can build more helpful and inclusive products.')
    })

    //check for image API in #3 block
    it('check image API in #3 block', () => {
        cy.request({
            method: 'GET',
            url: 'https://lh3.googleusercontent.com/9e0mUuSs6RuXzf-Qa_Dw2u8ZLM8M63ToKluy684GWuVjz1LsnjJ9H3cGcpq01owZQSDDabGbsaZQbZG0zwuqbecTSy2C0SY8BdeM=rwa-s614',
        }).then((res) => {
            expect(res.status).to.eq(200)
        })
    })

    //check button redirect in #3 block
    it('check button redirect to audio lens in #3 block', () => {
        cy.get('.nbu-content-section-buttons > a').eq(2).should('have.attr', 'href', '/our-research/')
    })


    //------------------------------
    //content in #4 block 
    //------------------------------
    it('check for correct text in "About" section in #4 block', () => {
        cy.get('.hero-box__headline').should('contain', 'Building helpful, inclusive products is a global effort.')
        cy.get('.hero-box__text').should('contain', 'Google is working to expand access to information and build products that help people unlock economic opportunity around the world. We invite technology builders to use our development and design tools to create more inclusive products.')
    })

    //check for image API in #4 block
    it('check image API in #4 block', () => {
        cy.request({
            method: 'GET',
            url: 'https://lh3.googleusercontent.com/WmyKGAYg3cyRgH3GaOMzwYmVcfyA4FHOY8LQ8lM08wTgqUPifHBi32T25LOcSg-lg3WmcG7gyiCoQqmk26XniOgc5DPqys3UMf6z=rwa-s1296',
        }).then((res) => {
            expect(res.status).to.eq(200)
        })
    })

    //check button redirect in #3 block
    it('check button redirect to audio lens in #4 block', () => {
        cy.get('.hero-box__content > .glue-button').should('have.attr', 'href', '/tools/')
    })
})