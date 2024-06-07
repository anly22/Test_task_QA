import loginPage from '../pageobjects/login.page.js'


describe("Saucedemo_Tests_Login_with_invalid_password", async () => {

    it("Unsuccessful login with invalid password", async () => {
        await loginPage.open()
        await loginPage.login('standard_user', 'absdifg')

        await expect(browser).toHaveUrl('https://www.saucedemo.com/')
        
        await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service')

        const propInputError = await loginPage.inputError.getCSSProperty('color')
        await expect(propInputError.value).toBe('rgba(72,76,85,1)')

        await expect(loginPage.errorIcon).toBeDisplayed() 
    })
})


