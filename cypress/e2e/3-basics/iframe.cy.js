/// <reference types="cypress" />
describe('iframe in cypress',function(){
    it('Iframe using the jquery',function(){
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(function($iframe){
            cy.log($iframe)
            cy.log($iframe.contents())//find out the document 
            let body = $iframe.contents().find('body')
            cy.wrap(body).as('iframe')
            cy.get('@iframe').contains('Home')
        })
    })
    it('Iframe using the javascript-1',function(){
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(function(iframe){
            cy.log(iframe)
            cy.log(iframe['0'].contentDocument)// document
            let body = iframe['0'].contentDocument.body// iframe body
            cy.wrap(body).as('iframe')
            cy.get('@iframe').contains('Home')
        })
    })
    it('iframe using javascript-2',function(){
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        let iframe = cy.get('#frame').its('0.contentDocument.body').then(cy.wrap)
        iframe.find('a[href= "index.html"]').should('have.text',"Home")
    })
    it('iframe using javascript-3',function(){
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        cy.getIframeBody('frame').find('a[href= "index.html"]').should('have.text',"Home")
    })
    it.only('iframe using javascript-4',function(){
        cy.visit('https://the-internet.herokuapp.com/tinymce')
        cy.getIframeBody('mce_0_ifr').find('p')
        .should('have.text','Your content goes here.')
        cy.getIframeBody('mce_0_ifr').find('p').type(`{ctrl+a}{ctrl+b}`)
        cy.getIframeBody('mce_0_ifr').find('strong').first().should('have.text','Your content goes here.')
    })
})