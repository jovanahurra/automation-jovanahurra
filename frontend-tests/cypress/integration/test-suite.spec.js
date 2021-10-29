/// <reference types="cypress" />

// This is a test suite
describe('Test suite', function(){

    //This is the first test case
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
        cy.get('.user > .btn').click()
        cy.contains('Login')
                
    })
    //This is the second test case
    //Confirm that the correct user is logged in
    it('Confirm user', function(){
        // Visit website
        cy.visit('http://localhost:3000')
        // Confirm that the page is correct 
        cy.contains('Login')
        // login
        cy.get(':nth-child(1) > input').type('tester02')
        cy.get(':nth-child(2) > input').type('sppm7qncqmVft5uECkwjLcLdEJGzM3Cw')
        cy.get('.btn').click()
        // confirm that the page is correct
        cy.contains('Tester Hotel Overview')
        //confirm the correct user is logged in 
        cy.get('.username').should("contain", "tester02")
    })
    // This is the third test case
    // Confirm there are no broken links and that every link leads to correct page
    it('Confirm links', function(){
        //Confirm Rooms
        cy.get(':nth-child(1) > .btn').click()
        cy.get('h2 > div').should("contain", "Rooms")
        cy.get(':nth-child(3) > .btn').click()

        // Confirm Clients
        cy.get('.blocks > :nth-child(2) > .btn').click()
        cy.get('h2 > div').should("contain", "Clients")
        cy.get(':nth-child(3) > .btn').click()

        // Confirm Bills
        cy.get(':nth-child(3) > .btn').click()
        cy.get('h2 > div').should("contain", "Bills")
        cy.get(':nth-child(3) > .btn').click()

        // Confirm Reservations
        cy.get(':nth-child(4) > .btn').click()
        cy.get('h2 > div').should("contain", "Reservations")
        cy.get(':nth-child(3) > .btn').click()
    })
    

})