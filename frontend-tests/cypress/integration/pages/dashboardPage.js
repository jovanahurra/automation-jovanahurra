/// <reference types="cypress" />

// Elements

const logoutBtn = '.user > .btn'
const roomsViewBtn = ':nth-child(1) > .btn'
const clientsViewBtn = '.blocks > :nth-child(2) > .btn'
const billsViewBtn = ':nth-child(3) > .btn'
const reservationsViewBtn = ':nth-child(4) > .btn'
const roomsConfirm = 'Rooms'
const clientsConfirm = 'Clients'
const billsConfirm = 'Bills'
const reservationsConfirm = 'Reservations'

// Actions/Functions

function performLogout (cy, contentToConfirm){
    cy.get(logoutBtn).click()
    cy.contains(contentToConfirm)
}

function roomsView (cy, contentToConfirm){
    cy.get(roomsViewBtn).click()
    cy.get('h2 > div').should("contain", roomsConfirm)
}
function clientsView (cy, contentToConfirm){
    cy.get(clientsViewBtn).click()
    cy.get('div.container:nth-child(2) > h2:nth-child(1) > div:nth-child(1)').should("contain", clientsConfirm)
}
function billsView (cy, contentToConfirm){
    cy.get(billsViewBtn).click()
    cy.get('h2 > div').should("contain", billsConfirm)
}
function reservationsView (cy, contentToConfirm){
    cy.get(reservationsViewBtn).click()
    cy.get('h2 > div').should("contain", reservationsConfirm)
}


// Exports
module.exports = {
    performLogout,
    roomsView,
    clientsView,
    billsView,
    reservationsView

}