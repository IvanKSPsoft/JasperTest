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

    test('Add medication(anytime) nudge', async({page}) => {
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
        await page.reload()
        await page.locator('[href="/home?modal=medication"]').waitFor({state: "hidden"})
    })

    test.only('Add Interest Nudge', async({page}) => {
        const app = new App(page)

        await page.locator('[href="/home?modal=add-interests"]').click()
        await page.waitForURL('/home?modal=add-interests', {waitUntil: 'networkidle'})
        await page.locator('//*[text()="Caregiving"]/../..'). click()
        await page.locator('[data-testing="button-submit"]').click()
        await page.waitForURL('/home')
        await page.reload()
        await page.locator('[href="/home?modal=add-interests"]').waitFor({state: "hidden"})
        await page.goto('/profiles/interests')
        await page.locator('//*[text()="Caregiving"]/../..').waitFor()
    })
})