Cypress.Commands.add("login", (username, password) => {

  cy.get("#loginPanel input[name='username']").type(username)

  cy.get("#loginPanel input[name='password']").type(password)

  cy.get("input[value='Log In']").click()

})