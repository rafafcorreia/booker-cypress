import login from '../../fixtures/login.json'
import booking from '../../fixtures/booking.json'

let token;
let id;

describe("Booker", () => {

    it('Create Token', () => {
        cy.request({
            method: 'POST',
            url: '/auth',
            body: login
        }).then(({ status, body }) => {
            expect(status).to.eq(200)
            token = body.token
        })
    })

    it('Create Booking', () => {
        cy.request({
            method: 'POST',
            url: '/booking',
            body: booking
        }).then(({ status, body }) => {
            expect(status).to.eq(200)
            id = body.bookingid
        })
    })

    it('Delete Booking', () => {
        cy.request({
            method: 'Delete',
            url: `/booking/${id}`,
            headers: {
                Cookie: `token=${token}`
            },
            body: booking
        }).then(({ status}) => {
            expect(status).to.eq(201)
        })
    })

})