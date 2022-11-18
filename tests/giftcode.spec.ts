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

    test.only('Sunscribe with GiftCode', async({page}) => {
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
    
})