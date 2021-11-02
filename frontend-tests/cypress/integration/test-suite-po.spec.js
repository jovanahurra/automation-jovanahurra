/// <reference types="cypress" />

import * as loginFuncs from '../integration/pages/indexPage'
import * as dashboardFuncs from '../integration/pages/dashboardPage'
import * as roomFuncs from '../integration/pages/roomsPage'
import * as targets from '../integration/targets/targets'

/*beforeEach( ()=>{
    cy.visit(targets.base_url)
    loginFuncs.checkTitleOfIndexPage
    loginFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
})
afterEach( ()=>{
    dashboardFuncs.performLogout(cy, 'Login')
})*/
// Test suite
describe ('Test suite PO', function(){
    beforeEach( ()=>{
    cy.visit(targets.base_url)
    loginFuncs.checkTitleOfIndexPage
    loginFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
})
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
    // Create a room
    it('Create a new room', function(){
        dashboardFuncs.roomsView(cy)
        roomFuncs.createNewRoom(targets.roomCategory, targets.roomNr, targets.roomFloor, targets.roomPrice, targets.roomFeatures)
        cy.contains('.card', targets.roomNr)
        roomFuncs.deleteRoom(cy)

    })


})