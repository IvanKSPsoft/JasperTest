import { Page } from '@playwright/test';

export class PlannerPage {
    page: Page;

    constructor(page: Page) {
        this.page = page
    }

    async open() {
        await this.page.goto('/planner')
    }

    async observeDefaultSharedActions() {
        await this.page.waitForSelector('//p[contains(text(),"Complete your new member evaluation")]')
        await this.page.waitForSelector('//p[contains(text(),"Schedule your first one-on-one coaching session")]')
      }
    
}