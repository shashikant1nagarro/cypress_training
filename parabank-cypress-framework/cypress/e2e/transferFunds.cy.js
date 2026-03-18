import AccountPage from "../pages/AccountPage";

const account = new AccountPage()

describe("Transfer funds", () => {
    beforeEach(()=> {
        cy.visit("/")
        cy.env(['username','password']).then(({username,password}) => {
            cy.login(username,password)
        })
    })
    it ("Transfer funds between accounts", () => {
        cy.fixture("transferFunds").then((data) =>{
            const fromAccount = data.accounts.from
            const toAccount = data.accounts.to
            const amount = data.accounts.amount
            cy.wrap(fromAccount).as("fromAccount")
            cy.wrap(toAccount).as("toAccount")
            cy.wrap(amount).as("amount")
            account.transferFunds(amount,fromAccount,toAccount)
        })
        
        cy.contains("Transfer Complete").should("be.visible")

        cy.get("@amount").then((amount) => {
        cy.get("@fromAccount").then((fromAccount) => {
            cy.get("@toAccount").then((toAccount) => {

                cy.contains(
                    `$${amount}.00 has been transferred from account #${fromAccount} to account #${toAccount}.`
                ).should("be.visible")

            })
        })
    })
    })
})