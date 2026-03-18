class LoginPage {

    username = "#loginPanel input[name='username']"
    password = "#loginPanel input[name='password']"
    loginBtn = "input[value='Log In']"

    enterUsername(username){
        cy.get(this.username).type(username)
    }

    enterPassword(password){
        cy.get(this.password).type(password)
    }

    clickLogin(){
        cy.get(this.loginBtn).click()
    }

}

export default LoginPage