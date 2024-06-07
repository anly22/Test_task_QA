// import { $ } from '@wdio/globals'
import Page from './page.js';

class CartPage extends Page {

    get productAddedName () {
        return $('.inventory_item_name');
    }

    get productAddedPrice () {
        return $('.inventory_item_price');
    }

    get btnCheckout () {
        return $('[name="checkout"]');
    }

    get messageError () {
        return $('.error-header');
    }
}

export default new CartPage();