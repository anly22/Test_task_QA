import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'
import CartPage from '../pageobjects/cart.page.js'


describe("Saucedemo_Tests_Saving_the_card_after_logout", async () => { 

    it("Login", async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')

    })

    it("Add to cart", async () => {
        await InventoryPage.btnAddToCartBikeLight.click()
        
        await expect(InventoryPage.cartBadge).toBeDisplayed()
        await expect(InventoryPage.cartBadge).toHaveText('1')
    })

    it("Logout", async () => {
        await InventoryPage.logout()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/')

        await expect(LoginPage.inputUsername).toHaveValue('')
        await expect(LoginPage.inputPassword).toHaveValue('')
    })

    it("Login again", async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
   
        await expect(InventoryPage.cartBadge).toBeDisplayed()
        await expect(InventoryPage.cartBadge).toHaveText('1')
    })

    it("Check the cart", async () => {
        await InventoryPage.cartLink.click()

        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        await expect(CartPage.productAddedName).toHaveText('Sauce Labs Bike Light')
    })
})