import { test } from '@playwright/test';
import { App } from '../pages/app';

test.describe('Daily Tracker', async() =>{
    test.beforeEach(async({page}) => {
        const app = new App(page)

        await app.signUpPage.createNewUser()
    })

    test('Track All Flow', async({page}) => {
        const app = new App(page),
        temperature = '120',
        weight = '180'

        await app.homePage.clickTrackAllFlow()
        await app.dailyTrackerPage.trackMood('Anxious')
        await app.dailyTrackerPage.trackMood('Depressed')
        await app.dailyTrackerPage.trackMood('Okay')
        await app.dailyTrackerPage.clickNextBtn()
        await app.dailyTrackerPage.trackSymptom('Pain', "Very Severe")
        await app.dailyTrackerPage.clickNextBtn()
        await app.dailyTrackerPage.trackTemperature(temperature)
        await app.dailyTrackerPage.trackWeight(weight)
        await app.dailyTrackerPage.clickNextBtn()
        await app.dailyTrackerPage.observeLastDailyTrackerScreen()
        await app.dailyTrackerPage.clickNextBtn()
        await app.homePage.observeDailyTrackerCompleteState()
    })
})