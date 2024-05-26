import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'
import CartPage from '../pageobjects/cart.page.js'


describe("Saucedemo_Tests_Unsuccessful checkout without products", async () => {

    it("Login", async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })

    it("Open the empty card", async () => {
        await expect(InventoryPage.cartBadge).not.toBeDisplayed()

        await InventoryPage.cartLink.click()

        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        await expect(CartPage.productAddedName).not.toBeDisplayed()
    })
    
    it("Checkout without products", async () => {
        await CartPage.btnCheckout.click()

        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        await expect(CartPage.messageError).toHaveText('Cart is empty')
    })
})