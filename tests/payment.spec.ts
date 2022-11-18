import { test, Page, } from '@playwright/test';
import { App } from '../pages/app';

test.describe('Payment Tests', async() => {
    test.beforeEach(async({page}) => {
        const app = new App(page)

        await app.signUpPage.createNewUser()
        await app.homePage.observeWelcomeText()
    })

    test('Subscribe with Valid Card', async({page}) => {
        const app = new App(page)

        await app.paymentPage.open()
        await app.paymentPage.clickGetCoachBtn()
        await app.paymentPage.inputCreditCardDetailes()
        await app.paymentPage.clickPayAndSubscribeBtn()
        await app.paymentPage.clickGetStartedBtn()
        await app.paymentPage.clickGotItBtn()
        await app.plannerPage.observeDefaultSharedActions()
    })
        
    // Oleg FYI
    test('Subscribe', async({page}) => {
        const app = new App(page)
        
        await app.paymentPage.subscribeToCarePlus()
    })
})