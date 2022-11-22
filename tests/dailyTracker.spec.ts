import { test } from '@playwright/test';
import { App } from '../pages/app';

test.describe('Daily Tracker', async() =>{
    test.beforeEach(async({page}) => {
        const app = new App(page)

        await app.signUpPage.createNewUser()
    })

    test('Track All Flow', async({page}) => {
        const app = new App(page),
        temperature = '120'

        await app.homePage.clickTrackAllFlow()
        await app.dailyTrackerPage.trackMood('Anxious')
        await app.dailyTrackerPage.trackMood('Depressed')
        await app.dailyTrackerPage.trackMood('Okay')
        await app.dailyTrackerPage.clickNextBtn()
        await app.dailyTrackerPage.trackSymptom('Pain', "Very Severe")
        await app.dailyTrackerPage.clickNextBtn()
        await app.dailyTrackerPage.trackTemperature(temperature)
        await page.locator('//*[text()="Weight"]/../../..').click()
        await page.locator('#weight').fill('170')
        await page.locator('//button[text()="Save"]').click()
        await page.locator('//*[contains(text(),"170.00 lb")]').waitFor()
        await app.dailyTrackerPage.clickNextBtn()
        await app.dailyTrackerPage.observeLastDailyTrackerScreen()
        await app.dailyTrackerPage.clickNextBtn()
        await app.homePage.observeDailyTrackerCompleteState()
    })
})