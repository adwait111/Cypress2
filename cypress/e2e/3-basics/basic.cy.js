/// <reference types="cypress" />

describe('verify cypress basic command', function () {
    it('verify the title of page', function () {
        cy.visit('https://webdriveruniversity.com/')
        cy.title().should('contain', 'WebDriverUniversity.com')
    })
    it('verify the current url', function () {
        cy.visit('https://webdriveruniversity.com/')
        cy.url().should('contain', 'webdriveruniversity')
    })
    it('how to log on cypress test runner', function () {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.log("before radio button")
        cy.get('input[value= "green"]').click()
        cy.contains('Green').should('be.visible')
        cy.get('label').contains('Option 4').should('be.visible')
        cy.contains('label', "Option 3").should('be.visible')
        cy.log("after radio button")
    })
    it('how to log on cypress test runner', function () {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.reload()
        cy.wait(2000)
        cy.log('after 2 seconds')
        cy.reload()
        cy.log('after reload')
    })
})