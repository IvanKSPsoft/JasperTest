import { Page } from '@playwright/test';


export class App {
    page: Page;

    constructor(page: Page) {
        this.page = page
    }
}