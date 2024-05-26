import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'


describe("Saucedemo_Tests_Footer_Links", async () => {

    it("Login with valid data", async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })

    it("Footer Twitter Link", async () => {
        await InventoryPage.linkTwitter.click()
              
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        await expect(browser).toHaveUrl('https://x.com/saucelabs')
        await expect(browser).toHaveTitle(expect.stringContaining('Sauce Labs'))
        await browser.closeWindow()
        await browser.switchToWindow(handles[0])

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
            
    it("Footer Facebook Link", async () => {
        await InventoryPage.linkFacebook.click()

        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        await expect(browser).toHaveUrl('https://www.facebook.com/saucelabs')
        await expect(browser).toHaveTitle(expect.stringContaining('Sauce Labs'))
        await browser.closeWindow()
        await browser.switchToWindow(handles[0])
        
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
                
    it("Footer LinkedIn Link", async () => {
        await InventoryPage.linkLinkedIn.click()

        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        await expect(browser).toHaveUrl('https://www.linkedin.com/company/sauce-labs/')
        await expect(browser).toHaveTitle(expect.stringContaining('Sauce Labs'))
        await browser.closeWindow()
        await browser.switchToWindow(handles[0])

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
})
