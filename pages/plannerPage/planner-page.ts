import { Page } from '@playwright/test';

export class PlannerPage {
    page: Page;

    constructor(page: Page) {
        this.page = page
    }

    async open() {
        await this.page.goto('/planner')
    }
    
}