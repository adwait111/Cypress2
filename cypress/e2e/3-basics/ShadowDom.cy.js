/// <reference types="cypress" />
describe('Verify the shadowDom element',function(){
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    it('first Way to find shadowdom element',function(){
        cy.visit('https://selectorshub.com/xpath-practice-page/')
        cy.get('#userName').shadow().find('#app2').shadow().find('#pizza').type('Dominos')
        cy.wait(20000)
    })
    // add command in golbal config 
    it.only('second wat to find shadowdon element',function(){
        cy.visit('https://selectorshub.com/xpath-practice-page/')
        cy.get('#pizza').should('be.visible').type("Domino's")
        cy.wait(30000)
    })
    // change for a particular testcase
    it('Third way to find shadowdon element',function(){
        cy.visit('https://selectorshub.com/xpath-practice-page/')
        cy.get('#pizza',{includeShadowDom:true}).should('be.visible').type("hello")
        cy.wait(30000)
    })
})
