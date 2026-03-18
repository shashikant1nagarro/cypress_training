class RegisterPage {

firstName = "#customer\\.firstName"
lastName = "#customer\\.lastName"
street = "#customer\\.address\\.street"
city = "#customer\\.address\\.city"
state = "#customer\\.address\\.state"
zipCode = "#customer\\.address\\.zipCode"
phoneNumber = "#customer\\.phoneNumber"
socialSecurity = "#customer\\.ssn"
username = "#customer\\.username"
password = "#customer\\.password"
confirmPassword = "#repeatedPassword"
registerButton = "input[value='Register']"

registerUser(first,last,user,pass,address){

cy.get(this.firstName).type(first)
cy.get(this.lastName).type(last)
cy.get(this.street).type(address)
cy.get(this.city).type(address)
cy.get(this.state).type(address)
cy.get(this.zipCode).type(address)
cy.get(this.phoneNumber).type(address)
cy.get(this.socialSecurity).type(address)
cy.get(this.username).type(user)
cy.get(this.password).type(pass)
cy.get(this.confirmPassword).type(pass)
cy.get(this.registerButton).click()
}

}

export default RegisterPage