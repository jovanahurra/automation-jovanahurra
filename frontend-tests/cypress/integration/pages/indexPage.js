/// <reference types="cypress" />

// Elements

const loginPageTitle = 'Testers Hotel'
const usernameInputField = ':nth-child(1) > input'
const passwordInputField = ':nth-child(2) > input'
const loginBtn = '.btn'

// Actions/Functions
function checkTitleOfIndexPage (){
    cy.title().should('eq', loginPageTitle)
}
function performValidLogin (cy, username, password, contentToConfirm){
    cy.get(usernameInputField).type(username)
    cy.get(passwordInputField).type(password)
    cy.get(loginBtn).click()
    cy.contains(contentToConfirm)
}

// Exports
module.exports = {
    checkTitleOfIndexPage,
    performValidLogin
}