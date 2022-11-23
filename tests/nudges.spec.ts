import { test } from '@playwright/test';
import { App } from '../pages/app';

test.describe('Nudges', async() => {
    test.beforeEach(async({page}) => {
        const app = new App(page)

        await app.signUpPage.createNewUser()
        await page.locator('[data-testing="tab:{All Items}"]').click()
        await page.locator('[aria-selected="true"][data-testing="tab:{All Items}"]').waitFor()
    })

    test('View Articles Nudge', async({page}) => {
        const app = new App(page)

        await page.locator('[href="/library"]').click()
        await page.waitForURL('/library', {waitUntil: 'networkidle'})
    })

    test.only('Add medication(anytime)', async({page}) => {
        const app = new App(page)

        await page.locator('[href="/home?modal=medication"]').click()
        await page.waitForURL('/home?modal=medication', {waitUntil: 'networkidle'})
        await page.locator('[data-testing="list-item-treatment:no-treatment"]'). click()
        await page.locator('[placeholder="Search for a medication"]').fill('codein')
        await page.locator('[data-testing="list-item-medication:{Codeine/guaiFENesin}"]').click()
        await page.locator('//span[text()="Oral Liquid"]/..').click()
        await page.locator('//span[text()=" 2.5-75 mg/5ml Sol"]/..').click()
        await page.locator('[data-testing="button-submit-medication"]').click()
        await page.locator('//*[text()="As Needed"]/../../..').click()
        await page.locator('//*[text()="Frequency: As Needed"]').waitFor()
        await page.locator('[data-testing="button-submit-medication"]').click()
        await page.locator('//*[contains(text(),"As Needed")]').waitFor()
        await page.locator('[data-testing="button-submit-medication"]').click()
        await page.waitForURL('/home')
        await page.locator('[href="/home?modal=medication"]').waitFor({state: "hidden"})
    })
})