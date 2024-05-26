import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'
import CartPage from '../pageobjects/cart.page.js'
import CheckoutOnePage from '../pageobjects/checkout.one.page.js'
import CheckoutTwoPage from '../pageobjects/checkout.two.page.js'
import CheckoutComplPage from '../pageobjects/checkout.compl.page.js'


describe("Saucedemo_Tests_Valid Checkout", function(){

    it("Login", async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })

    it("Add to cart first product", async () => { 
        await InventoryPage.btnAddToCartBikeLight.click()
        await expect(InventoryPage.cartBadge).toHaveText('1')
    })

    it("Check the card", async () => {
        await InventoryPage.cartLink.click()

        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')

        await expect(CartPage.productAddedName).toHaveText('Sauce Labs Bike Light')
        console.log((CartPage.productAddedName).getText())
    })
    
    it("Checkout", async () => {
        await CartPage.btnCheckout.click()

        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html')
        await CheckoutOnePage.fillCheckoutForm("Ben", "Miller", "12345")

        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html')
                
        await expect(CheckoutTwoPage.productOwerviewName).toHaveText('Sauce Labs Bike Light') 
        await expect(CheckoutTwoPage.productOwerviewPrice).toHaveText(expect.stringContaining('9.99'))
           
        await CheckoutTwoPage.btnFinish.click()

        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html')
        await expect(CheckoutComplPage.messageCompleted).toHaveText('Thank you for your order!')
      
        await CheckoutComplPage.btnBackToProducts.click()

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await expect(InventoryPage.inventoryList).toBeDisplayed()
        await expect(InventoryPage.cartBadge).not.toBeDisplayed()
    })

    it("Add to cart another product", async () => {
        await InventoryPage.btnAddToCartTShirt.click()

        await expect(InventoryPage.cartBadge).toHaveText('1')
    })

    it("Check the card", async () => {
        await InventoryPage.cartLink.click()

        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')

        await expect(CartPage.productAddedName).toHaveText('Sauce Labs Bolt T-Shirt')
        console.log((CartPage.productAddedName).getText())
    })
    
    it("Checkout", async () => {
        await CartPage.btnCheckout.click()

        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html')
        await CheckoutOnePage.fillCheckoutForm("Ben", "Miller", "12345")


        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html')
                
        await expect(CheckoutTwoPage.productOwerviewName).toHaveText('Sauce Labs Bolt T-Shirt') 
        await expect(CheckoutTwoPage.productOwerviewPrice).toHaveText(expect.stringContaining('15.99'))
           
        await CheckoutTwoPage.btnFinish.click()

        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html')
        await expect(CheckoutComplPage.messageCompleted).toHaveText('Thank you for your order!')
      
        await CheckoutComplPage.btnBackToProducts.click()

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await expect(InventoryPage.inventoryList).toBeDisplayed()
        await expect(InventoryPage.cartBadge).not.toBeDisplayed()
    })
})
