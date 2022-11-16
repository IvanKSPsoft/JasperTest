import { Locator, Page } from '@playwright/test';
import { testData } from '../utils/dataset';

export class PaymentPage {
    page: Page

    constructor(page: Page) {
        this.page = this.page
    }

    async open() {
        await this.page.goto('/profiles/subscriptions')
        await this.page.waitForLoadState('networkidle')
    }
}