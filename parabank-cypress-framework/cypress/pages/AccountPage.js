class AccountPage {

transferFundsLink = "a:contains('Transfer Funds')"
amountField = "#amount"
transferButton = "input[value='Transfer']"
fromAccount = "#fromAccountId"
toAccount="#toAccountId"

transferFunds(amount,fromAccountNo,toAccountNo){

cy.contains("Transfer Funds").click()

cy.get(this.amountField).type(amount)
cy.get(this.fromAccount).select(String(fromAccountNo))
cy.get(this.toAccount).select(String(toAccountNo))
cy.get(this.transferButton).click()

}

}

export default AccountPage