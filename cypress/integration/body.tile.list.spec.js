/// <reference types ="Cypress"/>

describe('test for tile product blocks', () => {
    beforeEach(
        () => {
            cy.visit('https://nextbillionusers.google/'),
                cy.viewport(1440, 900),
                cy.contains('OK, Got it').click(),
                cy.wait(300)
        }
    )

    //------------------------------------------
    //content in #1 block 
    //------------------------------------------

    //check for image API in #1 block
    it('check image API in #1 block', () => {
        cy.request({
            method: 'GET',
            url: 'https://lh3.googleusercontent.com/V64PzGGLrVWH1Wr6ixB8jekHJS4WoEWMayoJoC67kYaK0NxKm1LpbUyr74vwVWaY3YShm3v-6MXiFb68cJCNLOuaMIVS8X4mygyFQ7U=rwa-s514',
        }).then((res) => {
            expect(res.status).to.eq(200)
        })
    })

    //check for redirect correctly when click image
    it('check for redirect of #1 block - click ', () => {
        // cy.get('.nbu-tile-list-container .nbu-tile-list-item').eq(0).find('.nbu-video-image-container').click({ force: true })
        // cy.url().should('contain', '/product-stories/')
        cy.get('.nbu-tile ').eq(0).click({ force: true })
        cy.url().should('contain', '/product-stories/')
    })

    //check for the hover effect on #1 block
    it('check for hover effect on #1 block - mouseover', () => {
        cy.get('.nbu-tile-hover .image').eq(0).should('have.css', 'transition', 'transform 0.3s ease 0s')
    })

    //check for the text in eye brow and headline of #1 block
    it('check for correct text in #1 block', () => {
        cy.get(':nth-child(1) > .nbu-tile > .glue-eyebrow').contains("Product Stories").should('have.css', 'text-transform', 'uppercase')
        cy.get(':nth-child(1) > .nbu-tile > .glue-headline').should('contain', ' See what Google is building for the next generation of internet users.')
    })

    //------------------------------------------
    //content in #2 block 
    //------------------------------------------

    it('check image API in #2 block', () => {
        cy.request({
            method: 'GET',
            url: 'https://lh3.googleusercontent.com/KSJBof8snU35b_BihDbP3pz3hYhvLNSUZVVC6g78NOMIePs3oZv2bvZF40NPbfuXPcxHDP6ZBQ8k-PLGjviI6A3_XjpvhPzPvnAR=s514',
        }).then((res) => {
            expect(res.status).to.eq(200)
        })
    })

    //check for redirect correctly when click image
    it('check for redirect of #2 block - click ', () => {
        cy.get('.nbu-tile ').eq(1).click({ force: true })
        cy.url().should('contain', '/our-research/')
    })

    //check for the hover effect on #2 block
    it('check for hover effect on #2 block - mouseover', () => {
        cy.get('.nbu-tile-hover .image').eq(1).should('have.css', 'transition', 'transform 0.3s ease 0s')
    })

    //check for the text in eye brow and headline of #2 block
    it('check for correct text in #2 block', () => {
        cy.get(':nth-child(2) > .nbu-tile > .glue-eyebrow').contains('research').should('have.css', 'text-transform', 'uppercase')
        cy.get(':nth-child(2) > .nbu-tile > .glue-headline').contains('Explore research and insights to inform more inclusive product development.')
    })

    //------------------------------------------
    //content in #3 block 
    //------------------------------------------

    it('check image API in #3 block', () => {
        cy.request({
            method: 'GET',
            url: 'https://lh3.googleusercontent.com/yLoWHGyyZlGKWFTNkTG-ZvsKwVaD0X5I2CSeNcCAnQVHtVF3saUJljSePnyDzTr-ruXFKRMt7VJjaTiA64XEl9RpOCy1jO9PGA3B6Q=rwa-s514',
        }).then((res) => {
            expect(res.status).to.eq(200)
        })
    })

    //check for redirect correctly when click image
    it('check for redirect of #3 block - click ', () => {
        cy.get('.nbu-tile ').eq(2).click({ force: true })
        cy.url().should('contain', '/events/')
    })

    //check for the hover effect on #3 block
    it('check for hover effect on #3 block - mouseover', () => {
        cy.get('.nbu-tile-hover .image').eq(2).should('have.css', 'transition', 'transform 0.3s ease 0s')
    })

    //check for the text in eye brow and headline of #2 block
    it('check for correct text in #3 block', () => {
        cy.get(':nth-child(3) > .nbu-tile > .glue-eyebrow').contains('events').should('have.css', 'text-transform', 'uppercase')
        cy.get(':nth-child(3) > .nbu-tile > .glue-headline').contains('Connect with a community of technology builders and leaders.')
    })
})