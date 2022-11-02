import { Page } from '@playwright/test';


export class HomePage {
    page: Page;

    constructor(page: Page) {
        this.page = page
    }

    async open() {
        await this.page.goto('/home')
    }

    async observeHomePage() {
        await this.page.locator('//*[contains(text(),"Welcome to Jasper")]').waitFor()
    }
    
    
}