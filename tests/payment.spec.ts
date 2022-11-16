import { test, Page, } from '@playwright/test';
import { App } from '../pages/app';

test.describe('Payment Tests', async() => {
    test.beforeEach(async({page}) => {
        const app = new App(page)

        await app.signUpPage.createNewUser()
    })

    test('Subscribe with Valid Card', async({page}) => {
        
    })
})