import { $ } from '@wdio/globals'
import Page from './page.js';

class CheckoutCompletePage extends Page {

    get messageCompleted () {
        return $('.complete-header');
    }
   
    get btnBackToProducts () {
        return  $('[name="back-to-products"]');
    }
}

export default new CheckoutCompletePage();
