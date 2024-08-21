import booking from '../../fixtures/booking.json'

describe("Booker", () => {

    before('Create Token', () => {
        cy.createToken()
        
    })

    it('Create Booking', () => {
        cy.request({
            method: 'POST',
            url: '/booking',
            body: booking
        }).then(({ status, body }) => {
            expect(status).to.eq(200)
            Cypress.env('id', body.bookingid)
        })
    })

    it('Delete Booking', () => {
        cy.request({
            method: 'Delete',
            url: `/booking/${Cypress.env('id')}`,
            headers: {
                Cookie: `token=${Cypress.env('token')}`
            },
            body: booking
        }).then(({ status }) => {
            expect(status).to.eq(201)
        })
    })

})