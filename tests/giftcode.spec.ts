import { test, expect, Page } from '@playwright/test';
import { App } from '../pages/app';

test.beforeEach(async ({ page }) => {
  await page.goto('/gift-coach-plus')
});

test.describe('Gift Code' , () => {
    test('send gift code', async({page}) => {
        const app = new App(page)
        let giftCode

        giftCode = await app.giftCodePage.recieveGiftCode()
        console.log(giftCode.value.code)
    })

    test('Subscribe with GiftCode', async({page}) => {
        const app = new App(page)
        let giftCode

        const giftCodeObject = await app.giftCodePage.recieveGiftCode()
        giftCode = giftCodeObject.value.code
        await app.signUpPage.createNewUser()
        await app.paymentPage.open()
        await app.paymentPage.clickGetCoachBtn()
        await app.paymentPage.paywithGiftCode(giftCode)
        await app.paymentPage.clickGotItBtn()
        await app.plannerPage.observeDefaultSharedActions()
    })
    
    // test('Sunscribe with GiftCode', async({context, page}) => {
    //     const app = new App(page)
    //     let giftCode


    //     await app.signUpPage.createNewUser()
    //     await app.paymentPage.open()
    //     await app.paymentPage.clickGetCoachBtn()
    //     const [newPage] = await Promise.all([
    //         context.waitForEvent('page'),
    //         page.locator('//button[contains(text(),"Get Coach+")]').waitFor()
    //     ])
    //     const newApp = new App(newPage)
    //     const giftCodeObject = await newApp.giftCodePage.recieveGiftCode()
    //     giftCode = giftCodeObject.value.code


    //     await app.paymentPage.paywithGiftCode(giftCode)
    //     await app.paymentPage.clickGotItBtn()
    //     await app.plannerPage.observeDefaultSharedActions()
    // })
})