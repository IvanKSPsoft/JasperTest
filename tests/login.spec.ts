import { test } from '@playwright/test';
import { App } from '../pages/app';
import { testData } from '../pages/utils/dataset';
require('dotenv').config()

test.describe('Login', async() => {
    test.beforeEach(async({page}) => {
        const app = new App(page)

        await app.loginPage.open()
    })

    test('Login with valid credentials', async({page}) => {
        const app = new App(page)

        await app.loginPage.inputLoginCred(testData.loginEmail, testData.password)
        await app.loginPage.clickLoginBtn()
        await app.homePage.observeHomePage()
    })

    test('Login with invalid credentials', async({page}) => {
        const app = new App(page)

        await app.loginPage.inputLoginCred(testData.loginEmail,'testData.password')
        await app.loginPage.clickLoginBtn()
        await app.loginPage.observeAlertModal()
    })
})