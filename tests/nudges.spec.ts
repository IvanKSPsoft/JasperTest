import { test } from '@playwright/test';
import { App } from '../pages/app';

test.describe('Nudges', async() => {
    test.beforeEach(async({page}) => {
        const app = new App(page)

        await app.signUpPage.createNewUser()
        await app.homePage.clickAllItemsTab()
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
        await app.homePage.clickAllItemsTab()
        await page.locator('[href="/home?modal=medication"]').waitFor({state: "hidden"})
    })

    test('Add Interest Nudge', async({page}) => {
        const app = new App(page)

        await page.locator('[href="/home?modal=add-interests"]').click()
        await page.waitForURL('/home?modal=add-interests', {waitUntil: 'networkidle'})
        await page.locator('//*[text()="Caregiving"]/../..'). click()
        await page.locator('[data-testing="button-submit"]').click()
        await page.waitForURL('/home')
        await page.reload()
        await app.homePage.clickAllItemsTab()
        await page.locator('[href="/home?modal=add-interests"]').waitFor({state: "hidden"})
        await page.goto('/profiles/interests')
        await page.locator('//*[text()="Caregiving"]/../..').waitFor()
    })

    test.only('Add Treatment Nudge', async({page}) => {
        const app = new App(page)

        await page.locator('[href="/profiles/diagnosis-and-treatment"]').click()
        await page.waitForURL('/profiles/diagnosis-and-treatment', {waitUntil: 'networkidle'})
        await page.locator('[data-testing="button-add-treatment"]'). click()
        await page.locator('[data-testing="list-item-category:{Chemotherapy}"]').click()
        await page.locator('[data-testing="radio-label:{treatmentDefinition}:{Capecitabine (Xeloda)}"]').click()
        await page.locator('[data-testing="radio-label:{treatmentDefinition}:{Capecitabine (Xeloda)}"] .Mui-checked').waitFor()
        await page.locator('[data-testing="button-submit-treatment-definition"]').click()
        await page.locator('[data-testing="button-add-appointment:{treatment}:{chemotherapy-capecitabine-xeloda}"]').waitFor()
        await page.goto('/home')
        await page.reload()
        await app.homePage.clickAllItemsTab()
        await page.locator('[href="/profiles/diagnosis-and-treatment"]').waitFor({state: "hidden"})
    })
})