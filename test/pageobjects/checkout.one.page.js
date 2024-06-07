// import { $ } from '@wdio/globals'
import Page from './page.js';

class CheckoutOnePage extends Page {

    get inputFirstName () {
        return $('[name="firstName"]');
    }

    get inputLastName () {
        return $('[name="lastName"]');
    }

    get inputPostalCode () {
        return $('[name="postalCode"]');
    }

    get btnContinue () {
        return $('[name="continue"]');
    }


    async fillCheckoutForm (firstName, lastName, postCode) {
        await this.inputFirstName.addValue(firstName);
        await this.inputLastName.addValue(lastName);
        await this.inputPostalCode.addValue(postCode);
        await this.btnContinue.click();
    }
}

export default new CheckoutOnePage();