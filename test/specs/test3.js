import loginPage from '../pageobjects/login.page.js'


describe("Saucedemo_Tests_Login_with_invalid_login", async () => {

    it("Unsuccessful login with invalid login", async () => {
        await loginPage.open()
        await loginPage.login('standarD_user', 'secret_sauce')

        await expect(browser).toHaveUrl('https://www.saucedemo.com/')
        
        await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service')

        const propInputError = await loginPage.inputError.getCSSProperty('color')
        await expect(propInputError.value).toBe('rgba(72,76,85,1)')

        await expect(loginPage.errorIcon).toBeDisplayed() 
    })
})

