// import { $ } from '@wdio/globals'
import Page from './page.js';

class CheckoutTwoPage extends Page {

    get productOwerviewName () {
        return $('.inventory_item_name');
    }
   
    get productOwerviewPrice () {
        return $('.inventory_item_price');
    }

    get btnFinish () {
        return  $('[name="finish"]');
    }
   
}

export default new CheckoutTwoPage();