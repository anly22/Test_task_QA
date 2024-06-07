import loginPage from '../pageobjects/login.page.js'
import inventoryPage from '../pageobjects/inventory.page.js'
import cartPage from '../pageobjects/cart.page.js'
import checkoutOnePage from '../pageobjects/checkout.one.page.js'
import checkoutTwoPage from '../pageobjects/checkout.two.page.js'
import checkoutComplPage from '../pageobjects/checkout.compl.page.js'


describe("Saucedemo_Tests_Valid Checkout", function(){

    it("Login", async () => {
        await loginPage.open()
        await loginPage.login('standard_user', 'secret_sauce')

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })

    it("Add to cart first product", async () => { 
        await inventoryPage.btnAddToCartBikeLight.click()
        await expect(inventoryPage.cartBadge).toHaveText('1')
    })

    it("Check the card", async () => {
        await inventoryPage.cartLink.click()

        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')

        await expect(cartPage.productAddedName).toHaveText('Sauce Labs Bike Light')
        console.log((cartPage.productAddedName).getText())
    })
    
    it("Checkout", async () => {
        await cartPage.btnCheckout.click()

        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html')
        await checkoutOnePage.fillCheckoutForm("Ben", "Miller", "12345")

        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html')
                
        await expect(checkoutTwoPage.productOwerviewName).toHaveText('Sauce Labs Bike Light') 
        await expect(checkoutTwoPage.productOwerviewPrice).toHaveText(expect.stringContaining('9.99'))
           
        await checkoutTwoPage.btnFinish.click()

        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html')
        await expect(checkoutComplPage.messageCompleted).toHaveText('Thank you for your order!')
      
        await checkoutComplPage.btnBackToProducts.click()

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await expect(inventoryPage.inventoryList).toBeDisplayed()
        await expect(inventoryPage.cartBadge).not.toBeDisplayed()
    })

    it("Add to cart another product", async () => {
        await inventoryPage.btnAddToCartTShirt.click()

        await expect(inventoryPage.cartBadge).toHaveText('1')
    })

    it("Check the card", async () => {
        await inventoryPage.cartLink.click()

        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')

        await expect(cartPage.productAddedName).toHaveText('Sauce Labs Bolt T-Shirt')
        console.log((cartPage.productAddedName).getText())
    })
    
    it("Checkout", async () => {
        await cartPage.btnCheckout.click()

        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html')
        await checkoutOnePage.fillCheckoutForm("Ben", "Miller", "12345")


        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html')
                
        await expect(checkoutTwoPage.productOwerviewName).toHaveText('Sauce Labs Bolt T-Shirt') 
        await expect(checkoutTwoPage.productOwerviewPrice).toHaveText(expect.stringContaining('15.99'))
           
        await checkoutTwoPage.btnFinish.click()

        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html')
        await expect(checkoutComplPage.messageCompleted).toHaveText('Thank you for your order!')
      
        await checkoutComplPage.btnBackToProducts.click()

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await expect(inventoryPage.inventoryList).toBeDisplayed()
        await expect(inventoryPage.cartBadge).not.toBeDisplayed()
    })
})
