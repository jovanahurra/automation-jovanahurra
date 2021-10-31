/// <reference types="cypress" />

// This is a test suite
describe('Create and delete client suite', function(){
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
    it('Create a new client', function(){
        // Click on Clients and confirm the correct page opens
        cy.get('.blocks > :nth-child(2) > .btn').click()
        cy.get('h2 > div').should('contain', "Clients")
        // Click on "create client"
        cy.get('h2 > .btn').click()
        // Fill in information and save new client
        cy.get('h2 > div').should('contain', "New Client")
        cy.get(':nth-child(1) > input').type("Jovana Hurra")
        cy.get(':nth-child(2) > input').type("jovana.hurra@gmail.com")
        cy.get(':nth-child(3) > input').type("0762854699")
        cy.get('.blue').click()
        // Confirm new client was created 
        cy.get(':nth-child(3) > :nth-child(2) > h3').should('contain', "Jovana Hurra")
        // Delete client
        cy.get(':nth-child(3) > .action > img').click()
        cy.get('.menu > :nth-child(2)').click()



    })


})