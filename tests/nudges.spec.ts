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
        await page.locator('[data-testing="button-submit"]', {hasText: "Add Interests"}).click()
        await page.waitForURL('/home')
        await page.reload()
        await app.homePage.clickAllItemsTab()
        await page.locator('[href="/home?modal=add-interests"]').waitFor({state: "hidden"})
        await page.goto('/profiles/interests')
        await page.locator('//*[text()="Caregiving"]/../..').waitFor()
    })

    test('Add Treatment Nudge', async({page}) => {
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

    test('Add Medication Reminders Nudge', async({page}) => {
        const app = new App(page)

        await page.locator('[href="/profiles/medications"]').click()
        await page.waitForURL('/profiles/medications', {waitUntil: 'networkidle'})
        await page.locator('//button[text()="Add a Medication"]'). click()
        await page.waitForURL('/profiles/medications?modal=medication', {waitUntil: 'networkidle'})
        await page.locator('[data-testing="list-item-treatment:no-treatment"]'). click()
        await page.locator('[placeholder="Search for a medication"]').fill('codein')
        await page.locator('[data-testing="list-item-medication:{Codeine/guaiFENesin}"]').click()
        await page.locator('//span[text()="Oral Liquid"]/..').click()
        await page.locator('//span[text()=" 2.5-75 mg/5ml Sol"]/..').click()
        await page.locator('[data-testing="button-submit-medication"]').click()
        await page.locator('//*[text()="Every Day"]/../../..').click()
        await page.locator('[data-testing="times-per-day-done"]').click()
        await page.locator('//*[text()="Frequency: Every Day"]').waitFor()
        await page.locator('[data-testing="button-submit-medication"]').click()
        await page.locator('//*[contains(text(),"If you miss taking a scheduled medication")]').waitFor()
        await page.locator('[data-testing="button-submit-medication"]').click()
        await page.locator('//*[contains(text(),"Currently Taking")]').waitFor()
        await page.goto('/home')
        await page.reload()
        await app.homePage.clickAllItemsTab()
        await page.locator('[href="/profiles/medications"]').waitFor({state: "hidden"})
    })

    test('Add Insurance Nudge', async({page}) => {
        const app = new App(page)

        await page.locator('[href="/home?modal=insurance"]').click()
        await page.waitForURL('/home?modal=insurance', {waitUntil: 'networkidle'})
        await page.locator('//*[text()="Anthem"]'). click()
        await page.waitForURL('/home')
        await page.reload()
        await app.homePage.clickAllItemsTab()
        await page.locator('[href="/home?modal=insurance"]').waitFor({state: "hidden"})
        await page.goto('/profiles/insurance')
        await page.locator('//*[text()="Anthem"]').waitFor()
    })

    test('Add Appointment Nudge', async({page}) => {
        const app = new App(page)

        await page.locator('[href="/home?modal=add-appointment"]').click()
        await page.waitForURL('/home?modal=add-appointment', {waitUntil: 'networkidle'})
        await page.locator('//*[text()="Add Custom Appointment"]'). click()
        await page.locator('[placeholder="Add Appointment Name"]').fill('Custom')
        await page.locator('[data-testing="list-item-start-date"]').click()
        await page.locator('[role="row"] [aria-selected="true"]').click()
        await page.locator('//button[text()="Location"]').click()
        await page.locator('[type="text"]').fill('Detroit')
        await page.locator('//div[text()="Detroit"]').click()
        await page.locator('//button[text()="Remove"]').waitFor()
        await page.locator('[data-testing="button-submit-appointment-details"]').click()
        await page.waitForURL('/home')
        await page.reload()
        await app.homePage.clickAllItemsTab()
        await page.locator('[href="/home?modal=add-appointment"]').waitFor({state: "hidden"})
        await page.goto('/planner?appointments=true')
        await page.locator('//*[text()="Custom"]').waitFor()
    })

    test('Care Team Nudge', async({page}) => {
        const app = new App(page)

        await page.locator('[href="/home?modal=care-team-invitation"]').click()
        await page.waitForURL('/home?modal=care-team-invitation', {waitUntil: 'networkidle'})
    })

    test('Connection Nudge', async({page}) => {
        const app = new App(page)

        await page.locator('[href="/profiles/connections"]').click()
        await page.waitForURL('/profiles/connections', {waitUntil: 'networkidle'})
    })

    test('Add Race And Ethnicity Nudge', async({page}) => {
        const app = new App(page)

        await page.locator('//*[text()="Add your Speciality Pharmacy"]/../../../div/button').click()
        await page.locator('//*[text()="Add a Medication"]/../../../div/button').click()
        await page.locator('//*[text()="Add Your Interest"]/../../../div/button').click()
        await page.locator('//*[text()="Add your Speciality Pharmacy"]/../../../div/button').click()
        await page.locator('[href="/profiles/me"]').click()
        await page.waitForURL('/profiles/me', {waitUntil: 'networkidle'})
        await page.locator('//*[text()="Add Race"]/..'). click()
        await page.locator('[data-testing="radio-label:{race}:{White}"]').click()
        await page.waitForURL('/profiles/me')
        await page.locator('//*[text()="Add Ethnicity"]/..').click()
        await page.locator('[data-testing="radio-label:{ethnicity}:{Hispanic or Latino}"]').click()
        await page.waitForURL('/profiles/me')
        await page.goto('/home')
        await page.reload()
        await app.homePage.clickAllItemsTab()
        await page.locator('[href="/profiles/me"]').waitFor({state: "hidden"})
    })
})