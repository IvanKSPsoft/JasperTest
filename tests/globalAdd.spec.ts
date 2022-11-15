import { test } from '@playwright/test';
import { App } from '../pages/app';
import { testData } from '../pages/utils/dataset';

test.describe('Global Add btn Tests', async() => {
    test.beforeEach(async({page}) => {
        const app = new App(page)

        await app.loginPage.open()
        await app.loginPage.inputLoginCred(testData.playwrightUser, testData.password)
        await app.loginPage.clickLoginBtn()
        await app.homePage.clickglobalAddbtn()
    })

    test('Global Add Accessability', async({page}) => {
        const app = new App(page)

        await app.homePage.observeGlobalAddButtonList()
    })

    test.only('Open Tracker Modal', async({page}) => {
        const app = new App(page)

        await app.homePage.clickGlobalAddDailyTrackerBtn()
        await page.waitForURL('https://my.hellojasper.dev/home?modal=tracker')
    })


})