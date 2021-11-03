/// <reference types="cypress" />

const { startDate, endDate } = require("../targets/targets")

// Elements
const createReservationBtn = 'h2 > .btn'
const startDateField = ':nth-child(1) > input'
const endDateField = ':nth-child(2) > input'
const clientField = ':nth-child(3) > select'
const roomField = ':nth-child(4) > select' 
const billField = ':nth-child(5) > select'
const saveBtn = '.blue' 
const h2 = 'h2 > div'
const h2Reservation = 'New Reservation'
const reservationMenu = ':nth-child(2) > .action > img'
const deleteReserationBtn = '.menu > :nth-child(2)'

// Actions/Functions
function createNewReservation (startDate, endDate){
    cy.get(createReservationBtn).click()
    cy.get(h2).should('contain', h2Reservation)
    cy.get(startDateField).type(startDate)
    cy.get(endDateField).type(endDate)
    cy.get(clientField).select(1)
    cy.get(roomField).select(2)
    cy.get(billField).select(1)
    cy.get(saveBtn).click()
    cy.contains(startDate).should('exist')
}
function deleteReservation (cy){
    cy.get(reservationMenu).click()
    cy.get(deleteReserationBtn).click()
    cy.get('h3').should('not.contain', startDate)
}

// Exports
module.exports = {
    createNewReservation,
    deleteReservation
}