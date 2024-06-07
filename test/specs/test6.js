import loginPage from '../pageobjects/login.page.js'
import inventoryPage from '../pageobjects/inventory.page.js'


describe("Saucedemo_Tests_Product_sort", async () => {

    it("Login with valid data", async () => {
        await loginPage.open()
        await loginPage.login('standard_user', 'secret_sauce')

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })

    it("Product sort AZ", async () => {
        await inventoryPage.sortAZ()

        function isArraysSorted(firstArray) {
            const secondArray = [...firstArray]
            secondArray.sort()
            return firstArray.toString() === secondArray.toString();
            }
        
        let allItemNamesAZ = []
        
        for await (const name of $$('.inventory_item_name')) {
            let nameItem = await name.getText()
            allItemNamesAZ.push(nameItem)
        }

        // console.log(isArraysSorted(allItemNamesAZ))
        await expect(isArraysSorted(allItemNamesAZ)).toBe(true)
    })
       
    it("Product sort ZA", async () => {
        await inventoryPage.sortZA()

        function isArraysSortedReverse(firstArray) {
            const secondArray = [...firstArray]
            secondArray.sort()
            secondArray.reverse();
            return firstArray.toString() === secondArray.toString();
            }

        let allItemNamesZA = []
        
        for await (const name of $$('.inventory_item_name')) {
            let nameItem = await name.getText()
            allItemNamesZA.push(nameItem)
        }

        // console.log(isArraysSortedReverse(allItemNamesZA))
        await expect(isArraysSortedReverse(allItemNamesZA)).toBe(true)
    })

    it("Product sort LoHi", async () => {
        await inventoryPage.sortLoHi()

        function compare(a, b) {
            if (a > b) return 1; 
            if (a == b) return 0; 
            if (a < b) return -1; 
          }
        
        function isArraysNumSorted(firstArray) {
            const secondArray = [...firstArray]
            secondArray.sort(compare)
            return firstArray.toString() === secondArray.toString();
            }

        let  allItemPricesLoHi = []
        
        for await (const price of $$('.inventory_item_price')) {
            let priceItem = await price.getText()
            priceItem = Number(priceItem.replace('$', ''))
            allItemPricesLoHi.push(priceItem)
        }
 
        // console.log(allItemPricesLoHi)
        // console.log(isArraysNumSorted(allItemPricesLoHi))
        await expect(isArraysNumSorted(allItemPricesLoHi)).toBe(true)
    })

    it("Product sort HiLo", async () => {
        await inventoryPage.sortHiLo()

        function compare(a, b) {
            if (a > b) return 1; 
            if (a == b) return 0; 
            if (a < b) return -1; 
          }
               
        function isArraysNumSortedReverse(firstArray) {
            const secondArray = [...firstArray]
            secondArray.sort(compare)
            secondArray.reverse();
            return firstArray.toString() === secondArray.toString();
            }

        let  allItemPricesHiLo = []
        
        for await (const price of $$('.inventory_item_price')) {
            let priceItem = await price.getText()
            priceItem = Number(priceItem.replace('$', ''))
            allItemPricesHiLo.push(priceItem)
        }

        // console.log(allItemPricesHiLo)
        // console.log(isArraysNumSortedReverse(allItemPricesHiLo))
        await expect(isArraysNumSortedReverse(allItemPricesHiLo)).toBe(true)
    })
})
    