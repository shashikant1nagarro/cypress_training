describe("use of cy.origin", () => {
    it("Cross origin test", ()=> {
        cy.visit("https://example.cypress.io")
        cy.origin("https://en.wikipedia.org/wiki/Main_Page", () => {
            cy.visit("/")
            cy.get('#p-search > .cdx-button--fake-button > .vector-icon').type("Cypress Testing")
            cy.get('#searchform > .cdx-search-input > .cdx-button').click()
        })
    })
})