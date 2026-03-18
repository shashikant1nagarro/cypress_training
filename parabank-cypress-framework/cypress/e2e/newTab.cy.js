describe("New Tab Scenario", () =>{
    it("Open link in same tab", ()=>{
        cy.visit("https://en.wikipedia.org/wiki/Main_Page")
        cy.get("#Welcome_to_Wikipedia > a")
        .invoke("removeAttr","target")
        .click()
        cy.url().should('include','/wiki/')
    })
})