import loginPage from '../pageobjects/login.page.js'
import inventoryPage from '../pageobjects/inventory.page.js'


describe("Saucedemo_Tests_Logout", async () => {
    
    it("Login", async () => {
        await loginPage.open()
        await loginPage.login('standard_user', 'secret_sauce')

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })

    it("Logout", async () => {
        await inventoryPage.logout()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/')

        await expect(loginPage.inputUsername).toHaveValue('')
        await expect(loginPage.inputPassword).toHaveValue('')
    })
})