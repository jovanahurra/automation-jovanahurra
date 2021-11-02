/// <reference types="cypress" />

const { roomCategory, roomNr, roomFloor, roomFeatures } = require("../targets/targets")

// Elements
const createRoomBtn = 'h2 > .btn'
const categoryInputField = ':nth-child(1) > select'
const nrInputField = ':nth-child(2) > input'
const floorInputField = ':nth-child(3) > input'
const availabilityCheckbox = '.checkbox'
const priceInputField = ':nth-child(5) > input'
const featuresField = ':nth-child(6) > select'
const saveBtn = '.blue'
const h2Room = 'New Room'
const roomMenuBtn = ':nth-child(3) > .action > img'
const deleteRoomBtn = '.menu > :nth-child(2)'

// Actions/Functions
function createNewRoom (roomCategory, roomNr, roomFloor, roomPrice, roomFeatures){
cy.get(createRoomBtn).click()
cy.get('h2 > div').should('contain', h2Room)
cy.get(categoryInputField).select(roomCategory)
cy.get(nrInputField).type(roomNr)
cy.get(floorInputField).type(roomFloor)
cy.get(availabilityCheckbox).click()
cy.get(priceInputField).type(roomPrice)
cy.get(featuresField).select(roomFeatures)
cy.get(saveBtn).click()
}
function deleteRoom (cy){
cy.get(roomMenuBtn).click()
cy.get(deleteRoomBtn).click()
cy.contains(roomNr).should('not.exist')
}

// Exports
module.exports = {
    createNewRoom,
    deleteRoom
}