import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'


describe("Saucedemo_Tests_Login_with_invalid_password", async () => {

    it("Unsuccessful login with invalid password", async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'absdifg')

        await expect(browser).toHaveUrl('https://www.saucedemo.com/')
        
        const errorMessage = await $('.error-message-container')
        await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service')

        const inputError = await $('.form_input.error')
        const propInputError = await inputError.getCSSProperty('color')
        await expect(propInputError.value).toBe('rgba(72,76,85,1)')

        const errorIcon = await $('.error_icon')
        await expect(errorIcon).toBeDisplayed() 
    })
})


