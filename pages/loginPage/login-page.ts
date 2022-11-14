import { Page } from '@playwright/test';

export class LoginPage {
    page: Page;

    constructor(page: Page) {
        this.page = page
    }

    async open() {
        await this.page.goto('/login')
    }

    async inputLoginCred(email: string, password: string) {
        await this.page.locator('#email').fill(email)
        await this.page.locator('#password').fill(password)
    }

    async clickLoginBtn(){
        await this.page.locator('[data-testing="button-submit"]').click()
        await this.page.waitForLoadState('networkidle')
    }

    async observeAlertModal() {
        await this.page.locator('div[role="alert"]').waitFor()
    }
    
    async observeLoginScreen(){
        await this.page.locator('#email').waitFor()
    }
}