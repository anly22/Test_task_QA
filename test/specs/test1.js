import loginPage from '../pageobjects/login.page.js'
import inventoryPage from '../pageobjects/inventory.page.js'


describe("Saucedemo_Tests_Login_with_valid_data", async () => {

    it("Login with valid data", async () => {

        await loginPage.open()
        await loginPage.inputUsername.setValue("standard_user")
        await loginPage.inputPassword.setValue("secret_sauce")

        const prop = await loginPage.inputPassword.getCSSProperty('-webkit-text-security')
        await expect(prop.value).toBe('disc')
    
        await loginPage.btnLogin.click()

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await expect(inventoryPage.inventoryList).toBeDisplayed()
        await expect(inventoryPage.cartLink).toBeDisplayed()
    })
})
