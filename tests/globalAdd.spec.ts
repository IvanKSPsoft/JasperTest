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

    test('Open Tracker Modal', async({page}) => {
        const app = new App(page)

        await app.homePage.clickGlobalAddDailyTrackerBtn()
        await page.waitForURL('/home?modal=tracker')
    })

    test('Open Appointment Modal', async({page}) => {
        const app = new App(page)

        await app.homePage.clickGlobalAddAppointmentBtn()
        await page.waitForURL('/home?modal=add-appointment')
    })

    test('Open Todo Modal', async({page}) => {
        const app = new App(page)

        await app.homePage.clickGlobalAddTodoBtn()
        await page.waitForURL('/home?modal=add-todo')
    })

    test('Open Medication Modal', async({page}) => {
        const app = new App(page)

        await app.homePage.clickGlobalAddMedicationBtn()
        await page.waitForURL('/home?modal=medication')
    })

    test('Open Note Modal', async({page}) => {
        const app = new App(page)

        await app.homePage.clickGlobalAddNotenBtn()
        await page.waitForURL('/home?modal=add-global-note')
    })

})