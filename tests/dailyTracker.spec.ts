import { test } from '@playwright/test';
import { App } from '../pages/app';

test.describe('Daily Tracker', async() =>{
    test.beforeEach(async({page}) => {
        const app = new App(page)

        await app.signUpPage.createNewUser()
    })

    test('Track All Flow', async({page}) => {
        const app = new App(page)

        await app.homePage.clickTrackAllFlow()
        await page.locator('//*[text()="Anxious"]/../..').click()
        await page.locator('//*[text()="Depressed"]/../..').click()
        await page.locator('//*[text()="Okay"]/../../..').click()
        await page.locator('[data-testing="button-submit"]').click()
        await page.locator('//*[text()="Pain"]').click()
        await page.locator('//*[text()="Very Severe"]/../..').click()
        await page.locator('[data-testing="button-submit"]').click()
        await page.locator('//*[text()="Temperature"]/../../..').click()
        await page.locator('#temperature').fill('120')
        await page.locator('//button[text()="Save"]').click()
        await page.locator('//*[contains(text(),"120.0")]').waitFor()
        await page.locator('[data-testing="button-submit"]').click()
        await page.locator('//*[contains(text(),"Keep up the good work")]').waitFor()
        await page.locator('[data-testing="button-submit"]').click()
        await app.homePage.observeDailyTrackerCompleteState()
    })
})