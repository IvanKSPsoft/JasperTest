import { test } from '@playwright/test';
import { App } from '../pages/app';
import { dailyTrackerData } from '../pages/utils/dailyTrackerData';

test.describe('Daily Tracker', async() =>{
    test.beforeEach(async({page}) => {
        const app = new App(page)

        await app.signUpPage.createNewUser()
    })

    test('Track All Flow', async({page}) => {
        const app = new App(page)

        await app.homePage.clickTrackAllFlow()
        await app.dailyTrackerPage.trackMood('Anxious')
        await app.dailyTrackerPage.trackMood('Depressed')
        await app.dailyTrackerPage.trackMood('Okay')
        await app.dailyTrackerPage.clickNextBtn()
        await app.dailyTrackerPage.trackSymptom('Pain', "Very Severe")
        await app.dailyTrackerPage.clickNextBtn()
        await app.dailyTrackerPage.trackTemperature(dailyTrackerData.temperature)
        await app.dailyTrackerPage.trackWeight(dailyTrackerData.weight)
        await app.dailyTrackerPage.trackBlodPressure(dailyTrackerData.sustolic, dailyTrackerData.diastolic)
        await app.dailyTrackerPage.trackSleep(dailyTrackerData.hours, dailyTrackerData.minute)
        await app.dailyTrackerPage.clickNextBtn()
        await app.dailyTrackerPage.observeLastDailyTrackerScreen()
        await app.dailyTrackerPage.clickNextBtn()
        await app.homePage.observeDailyTrackerCompleteState()
    })
})