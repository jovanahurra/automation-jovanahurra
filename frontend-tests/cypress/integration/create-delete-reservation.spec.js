/// <reference types="cypress" />

// This is a test suite
describe('Create and delete reservation suite', function(){
    // Login
    it('Perform valid loign', function(){
        // Visit website
        cy.visit('http://localhost:3000')
        // Confirm that the page is correct 
        cy.contains('Login')
        // login
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        // confirm that the page is correct
        cy.contains('Tester Hotel Overview')
    })
    //This is the fifth test case
    // Create a new client
    it('Create a new Reservation', function(){
        // Click on Reservations and confirm the correct page opens
        cy.get(':nth-child(4) > .btn').click()
        cy.get('h2 > div').should('contain', "Reservations")
        cy.get('h2 > .btn').click()
        cy.get('h2 > div').should('contain', "New Reservation")
        // Fill in information/choose from menu and save reservation
        cy.get(':nth-child(1) > input').type("2021-12-06")
        cy.get(':nth-child(2) > input').type("2021-12-12")
        cy.get(':nth-child(3) > select').select(1)
        cy.get(':nth-child(4) > select').select(2)
        cy.get(':nth-child(5) > select').select(1)
        cy.get('.blue').click()
        // Confirm correct page is loaded
        cy.get(':nth-child(2) > .id').should('contain', "2")
        // Delete a reservation
        cy.get(':nth-child(2) > .action > img').click()
        cy.get('.menu > :nth-child(2)').click()

    })
})