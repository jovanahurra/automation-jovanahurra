/// <reference types="cypress" />

// This is a test suite
describe('Function create Test suite', function(){

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
     
    //This is the fourth test case
    // Create a new room
    it('Create a new room', function(){
        //Confirm Rooms
        cy.get(':nth-child(1) > .btn').click()
        // Confrim correct page opens
        cy.get('h2 > div').should("contain", "Rooms")
        cy.get('h2 > .btn').click()
        // Confirm the correct page opens
        cy.get('h2 > div').should("contain", "New Room")
        cy.get(':nth-child(1) > select').select("single")
        cy.get(':nth-child(2) > input').type("333")
        cy.get(':nth-child(3) > input').type("3")
        cy.get('.checkbox').click()
        cy.get(':nth-child(5) > input').type("1500")
        cy.get(':nth-child(6) > select').select(["balcony", "sea_view", "penthouse"])
        cy.get('.blue').click()
        // Confrim correct page shows
        cy.get('h2 > div').should("contain", "Rooms")

    })
    it('Delete a room', function(){
        cy.get(':nth-child(3) > .action > img').click()
        cy.get('.menu > :nth-child(2)').click()

    })

})