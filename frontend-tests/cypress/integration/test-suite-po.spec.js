/// <reference types="cypress" />

import * as loginFuncs from '../integration/pages/indexPage'
import * as dashboardFuncs from '../integration/pages/dashboardPage'
import * as roomFuncs from '../integration/pages/roomsPage'
import * as clientFuncs from '../integration/pages/clientsPage'
import * as reservationFuncs from '../integration/pages/reservationsPage'
import * as targets from '../integration/targets/targets'


// Test suite
describe ('Test suite PO', function(){
    // Before each test case, visit website nad login 
    beforeEach( ()=>{
    cy.visit(targets.base_url)
    loginFuncs.checkTitleOfIndexPage
    loginFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
})
    // After each test case, logout
    afterEach( ()=>{
    dashboardFuncs.performLogout(cy, 'Login')
})
    
    // Test case 1
    // Confirm Rooms link
    it('Confirm Rooms link', function(){
        dashboardFuncs.roomsView(cy)        
    })
    // Test case 2
    // Confirm Clients link
    it('Confirm Clients link', function(){
        dashboardFuncs.clientsView(cy)        
    })
    // Test case 3
    // Confirm Bills link
    it('Confirm Bills link', function(){
        dashboardFuncs.billsView(cy)        
    })
    // Test case 4
    // Confirm Reservations link
    it('Confirm Reservations link', function (){
        dashboardFuncs.reservationsView(cy)
    })
    // Test case 5
    // Create and delete a room
    it('Create and delete a new room', function(){
        dashboardFuncs.roomsView(cy)
        roomFuncs.createNewRoom(targets.roomCategory, targets.roomNr, targets.roomFloor, targets.roomPrice, targets.roomFeatures)
        cy.contains('.card', targets.roomNr)
        roomFuncs.deleteRoom(cy)
    })
    // Test case 6
    // Create and delete a client
    it('Create and delete a new client', function(){
        dashboardFuncs.clientsView(cy)
        clientFuncs.createNewClient(targets.clientName, targets.clientEmail, targets.clientTel)
        cy.contains('.card', targets.clientName)
        clientFuncs.deleteClient(cy)
    })
    // Test case 7
    // Create and delete a reservation
    it('Create and detele a reservation', function(){
        dashboardFuncs.reservationsView(cy)
        reservationFuncs.createNewReservation(targets.startDate, targets.endDate)
        cy.contains('.card', targets.startDate, targets.endDate)
        reservationFuncs.deleteReservation(cy)
    })

})