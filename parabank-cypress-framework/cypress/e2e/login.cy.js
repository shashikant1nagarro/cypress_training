import LoginPage from "../pages/loginPage";

const login = new LoginPage()

describe("Login to Para Bank User Portal",() => {
  beforeEach(()=> {
    cy.visit("/")
  })
  it("Login with valid credentials", () => {
    cy.fixture("users").then ((data) => {
      login.enterUsername(data.user1.username)
      login.enterPassword(data.user1.password)
      login.clickLogin()
    })
    cy.contains("Accounts Overview").should("be.visible")
  })
})  