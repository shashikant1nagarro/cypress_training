describe("Account Overview", () => {
    beforeEach(()=>{
        cy.visit("/")
        cy.env(['username','password']).then(({username,password}) => {
            cy.login(username,password)
        })        
               
    })
    it ("Verify Account Overview Page is Visible", ()=> {
        cy.contains("Accounts Overview").should("be.visible")
    })
})