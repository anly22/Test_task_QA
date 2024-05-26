import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'


describe("Saucedemo_Tests_Login_with_valid_data", async () => {

    it("Login with valid data", async () => {

        await LoginPage.open()
        await LoginPage.inputUsername.setValue("standard_user")
        await LoginPage.inputPassword.setValue("secret_sauce")

        await expect(LoginPage.inputPassword).not.toHaveText()
        const prop = await LoginPage.inputPassword.getCSSProperty('-webkit-text-security')
        await expect(prop.value).toBe('disc')
    
        await LoginPage.btnLogin.click()

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await expect(InventoryPage.inventoryList).toBeDisplayed()
        await expect(InventoryPage.cartLink).toBeDisplayed()
    })
})
