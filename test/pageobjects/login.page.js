import Page from './page.js';

class LoginPage extends Page {

    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnLogin () {
        return $('#login-button');
    }

    get errorMessage () {
        return $('.error-message-container');
    } 

    get inputError () {
        return $('.form_input.error')
    }

    get errorIcon () {
        return $('.error_icon')
    }

    
    // async getColor() {
    //     const propInputError = await this.inputError.getCSSProperty('color')
    //     return propInputError.value
    // }
    // get propInputError () {
    //     return (this.inputError).getCSSProperty('color')
    // } 

    // const propInputError = await loginPage.inputError.getCSSProperty('color')
    // // console.log('COLOR IS', loginPage.propInputError)
    // console.log('COLOR IS', propInputError)
    // await expect(propInputError.value).toBe('rgba(72,76,85,1)')

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }


    open () {
        return super.open('login');
    }
}

export default new LoginPage();
