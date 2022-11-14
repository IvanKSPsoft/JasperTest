import { Locator, Page } from '@playwright/test';

export class ProfilePage {
    page: Page

    constructor(page: Page) {
        this.page = page
    }

    async open() {
        await this.page.goto('/profiles')
        await this.page.waitForLoadState('networkidle')
    }

    async clickLogout() {
        await this.page.locator('//*[contains(text(),"Log Out")]/../..').nth(0).click()
        await this.page.waitForLoadState('networkidle')
    }
}