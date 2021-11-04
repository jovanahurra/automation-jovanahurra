/// <reference types="cypress" />

const { clientName } = require("../targets/targets")

// Elements
const createClientBtn = 'h2 > .btn'
const nameInputField = ':nth-child(1) > input'
const emailInputField = ':nth-child(2) > input'
const telInputField = ':nth-child(3) > input'
const saveBtn = '.blue'
const h2 = 'h2 > div'
const h2Client = 'New Client'
const clientMenuBtn = ':nth-child(3) > .action > img'
const clientDeleteBtn = '.menu > :nth-child(2)'

// Actions/Functions
// Create client
function createNewClient (clientName, clientEmail, clientTel){
    cy.get(createClientBtn).click()
    cy.get(h2).should('contain', h2Client)
    cy.get(nameInputField).type(clientName)
    cy.get(emailInputField).type(clientEmail)
    cy.get(telInputField).type(clientTel)
    cy.get(saveBtn).click()
    cy.contains(clientName).should('exist')
}
// Delete client
function deleteClient(cy){
    cy.get(clientMenuBtn).click()
    cy.get(clientDeleteBtn).click()
    cy.contains(clientName).should('not.exist')
}

// Exports
module.exports = {
createNewClient,
deleteClient
}