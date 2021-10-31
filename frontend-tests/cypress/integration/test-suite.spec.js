/// <reference types="cypress" />

// Before each test a user should log in
beforeEach("", function(){
 // Visit website
 cy.visit('http://localhost:3000')
 // Confirm that the page is correct 
 cy.contains('Login')
 // login
 cy.get(':nth-child(1) > input').type('tester01')
 cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
 cy.get('.btn').click()
 // confirm correct user is logged in 
 //confirm the correct user is logged in 
 cy.get('.username').should("contain", "tester01")
 // confirm that the page is correct
 cy.contains('Tester Hotel Overview')
      
})

// After east test case, log out the user
afterEach("", function(){
    cy.get('.user > .btn').click()
    cy.contains('Login')
})

// This is a test suite
describe('Test suite', function(){

    // This is the first test case
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

    //This is the second test case
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

    // This is the third test case
    it('Delete a room', function(){
        cy.get(':nth-child(1) > .btn').click()
        cy.get(':nth-child(3) > .action > img').click()
        cy.get('.menu > :nth-child(2)').click()
    })

    // This is the fourth test case 
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
    })

        // This is the fifth test case
        // Delete client
        it('Delete a client', function(){
        cy.get('.blocks > :nth-child(2) > .btn').click()
        cy.get(':nth-child(3) > .action > img').click()
        cy.get('.menu > :nth-child(2)').click()
    })
    
     //This is the sixth test case
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
    })

    // This is the seventh test case
    // Delete a reservation
    it('Delete a reservation', function(){
        cy.get(':nth-child(4) > .btn').click()
        cy.get(':nth-child(2) > .action > img').click()
        cy.get('.menu > :nth-child(2)').click()
    })
})
