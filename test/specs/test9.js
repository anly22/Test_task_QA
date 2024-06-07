import loginPage from '../pageobjects/login.page.js'
import inventoryPage from '../pageobjects/inventory.page.js'
import cartPage from '../pageobjects/cart.page.js'


describe("Saucedemo_Tests_Unsuccessful checkout without products", async () => {

    it("Login", async () => {
        await loginPage.open()
        await loginPage.login('standard_user', 'secret_sauce')

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })

    it("Open the empty card", async () => {
        await expect(inventoryPage.cartBadge).not.toBeDisplayed()

        await inventoryPage.cartLink.click()

        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        await expect(cartPage.productAddedName).nottoBeDisplayed()
    })
    
    it("Checkout without products", async () => {
        await cartPage.btnCheckout.click()

        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        await expect(cartPage.messageError).toHaveText('Cart is empty')
    })
})