import loginPage from '../pageobjects/login.page.js'
import inventoryPage from '../pageobjects/inventory.page.js'
import cartPage from '../pageobjects/cart.page.js'


describe("Saucedemo_Tests_Saving_the_card_after_logout", async () => { 

    it("Login", async () => {
        await loginPage.open()
        await loginPage.login('standard_user', 'secret_sauce')

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')

    })

    it("Add to cart", async () => {
        await inventoryPage.btnAddToCartBikeLight.click()
        
        await expect(inventoryPage.cartBadge).toBeDisplayed()
        await expect(inventoryPage.cartBadge).toHaveText('1')
    })

    it("Logout", async () => {
        await inventoryPage.logout()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/')

        await expect(loginPage.inputUsername).toHaveValue('')
        await expect(loginPage.inputPassword).toHaveValue('')
    })

    it("Login again", async () => {
        await loginPage.open()
        await loginPage.login('standard_user', 'secret_sauce')
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
   
        await expect(inventoryPage.cartBadge).toBeDisplayed()
        await expect(inventoryPage.cartBadge).toHaveText('1')
    })

    it("Check the cart", async () => {
        await inventoryPage.cartLink.click()

        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        await expect(cartPage.productAddedName).toHaveText('Sauce Labs Bike Light')
    })
})