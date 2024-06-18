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
