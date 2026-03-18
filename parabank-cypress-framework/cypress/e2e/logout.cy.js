
describe("Logout", () => {
  it("Logout from the Parabank Web Application", () => {
    cy.visit("/")
    cy.env(['username','password']).then(({username,password}) => {
            cy.login(username,password)
        })
    cy.contains("Log Out").click()
    cy.contains("Customer Login").should("be.visible")
  })
})