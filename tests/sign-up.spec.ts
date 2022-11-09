import { test, Page, } from '@playwright/test';
import { App } from '../pages/app';
import { testData } from '../pages/utils/dataset';

test.describe('Sign-up', async() =>{
    test('Sign-up As New User', async({page}) => {
        const app = new App(page)

        await app.signUpPage.open()
        await app.signUpPage.selectUserType()
        await app.signUpPage.inputUserInfo(testData.randomFirstName, testData.randomLastName)
        await app.signUpPage.inputAccountData(testData.email, testData.password)
        await app.signUpPage.observeWelcomeModal()
        await app.signUpPage.inputAdditionalInfo()
        await app.signUpPage.selectCancerType()
        await app.signUpPage.observeTreatmentPage()
        await app.signUpPage.observeConnectionPage()
        await app.signUpPage.observeInterestsPage()
        await app.homePage.observeWelcomeText()

    })
})