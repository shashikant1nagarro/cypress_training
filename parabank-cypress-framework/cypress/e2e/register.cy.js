import RegisterPage from '../pages/RegisterPage'

const register = new RegisterPage()

describe("User Registration", () => {
    it("Register New User", () => {
        cy.visit("/register.htm")
        cy.fixture("newuser").then((data) =>{
            const userName = data.newuser1.userName + Date.now()
            cy.wrap(userName).as("userName")
            register.registerUser(
                data.newuser1.firstName,
                data.newuser1.lastName,
                userName,
                data.newuser1.password,
                data.newuser1.address
        )}
        )
        cy.contains("Your account was created successfully").should("exist")
        cy.get("@userName").then((userName) => {
            cy.contains("Welcome " + userName).should("exist")
        })
    })

})