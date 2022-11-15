import { Page, Locator } from '@playwright/test';
import { homePageLocators } from './homePageLocators';


export class HomePage {
    page: Page;
    globalAddBtn: Locator;
    globalAddDailyTrackerBtn: Locator;
    globalAddAppointmentBtn: Locator;
    globalAddTodoBtnLocator: Locator;
    globalAddMedicationBtn: Locator;
    globalAddNoteBtn: Locator;
    globalAddDocumentBtn: Locator;

    constructor(page: Page) {
        this.page = page
        this.globalAddBtn = page.locator(homePageLocators.globalAddBtnLocator)
        this.globalAddDailyTrackerBtn = page.locator(homePageLocators.globalAddDailyTrackerBtnLocator)
        this.globalAddAppointmentBtn = page.locator(homePageLocators.globalAddAppointmentBtnLocator)
        this.globalAddTodoBtnLocator = page.locator(homePageLocators.globalAddTodoBtnLocator)
        this.globalAddMedicationBtn = page.locator(homePageLocators.globalAddMedicationBtnLocator)
        this.globalAddNoteBtn = page.locator(homePageLocators.globalAddNoteBtnLocator)
        this.globalAddDocumentBtn = page.locator(homePageLocators.globalAddDocumentBtnLocator)
    }

    async open() {
        await this.page.goto('/home')
    }

    async observeWelcomeText() {
        await this.page.locator('//*[contains(text(),"Welcome to Jasper")]').waitFor()
    }
    
    async observeHomePage() {
        await this.page.locator('[data-testing="tab:{Today}"]').waitFor()
    }

    async clickglobalAddbtn() {
        await this.globalAddBtn.click()
    }

    async observeGlobalAddButtonList() {
        await this.globalAddDailyTrackerBtn.waitFor()
        await this.globalAddAppointmentBtn.waitFor()
        await this.globalAddTodoBtnLocator.waitFor()
        await this.globalAddMedicationBtn.waitFor()
        await this.globalAddNoteBtn.waitFor()
        await this.globalAddDocumentBtn.waitFor()
    }

    async clickGlobalAddDailyTrackerBtn() {
        await this.globalAddDailyTrackerBtn.click()

    }
    
    
}