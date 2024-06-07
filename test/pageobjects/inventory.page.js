import Page from './page.js';

class InventoryPage extends Page{

    get inventoryList () {
        return $('.inventory_list')
    }

    get btnBurgerMenu () {
        return $('.bm-burger-button')
    }

    get logoutLink () {
        return $('#logout_sidebar_link')
    }

    get btnAddToCartBikeLight () {
        return $('[name="add-to-cart-sauce-labs-bike-light"]')
    }

    get btnAddToCartTShirt () {
        return $("//button[@data-test='add-to-cart-sauce-labs-bolt-t-shirt']")
    }
   
    get cartBadge () {
        return $('.shopping_cart_badge')
    }

    get cartLink () {
        return $('.shopping_cart_link')
    }

    get sortDropdown () {
        return $('.product_sort_container')
    }

    get optionAZ () {
        return $('[value = az]')
    }

    get optionZA () {
        return $('[value = za]')
    }

    get optionLoHi () {
        return $('[value = lohi]')
    }

    get optionHiLo () {
        return $('[value = hilo]')
    }

    get linkTwitter () {
        return $('[data-test = "social-twitter"]')
    }

    get linkFacebook () {
        return $('.social_facebook')
    }
   
    get linkLinkedIn () {
        return $('[data-test = "social-linkedin"]')
    }
     

    async logout () {
        await this.btnBurgerMenu.click();
        await this.logoutLink.click();
    }

    async sortAZ () {
        await this.sortDropdown.click();
        await this.optionAZ.click();
    }
    async sortZA () {
        await this.sortDropdown.click();
        await this.optionZA.click();
    }    

    async sortLoHi () {
        await this.sortDropdown.click();
        await this.optionLoHi.click();
    }    

    async sortHiLo () {
        await this.sortDropdown.click();
        await this.optionHiLo.click();
    }

}

export default new InventoryPage();
