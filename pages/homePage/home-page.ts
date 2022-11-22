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
    trackAllFlowBtn: Locator;
    dailyTrackerCompleteState: Locator;

    constructor(page: Page) {
        this.page = page
        this.globalAddBtn = page.locator(homePageLocators.globalAddBtnLocator)
        this.globalAddDailyTrackerBtn = page.locator(homePageLocators.globalAddDailyTrackerBtnLocator)
        this.globalAddAppointmentBtn = page.locator(homePageLocators.globalAddAppointmentBtnLocator)
        this.globalAddTodoBtnLocator = page.locator(homePageLocators.globalAddTodoBtnLocator)
        this.globalAddMedicationBtn = page.locator(homePageLocators.globalAddMedicationBtnLocator)
        this.globalAddNoteBtn = page.locator(homePageLocators.globalAddNoteBtnLocator)
        this.globalAddDocumentBtn = page.locator(homePageLocators.globalAddDocumentBtnLocator)
        this.trackAllFlowBtn = page.locator(homePageLocators.trackAllFlowBtnLocator)
        this.dailyTrackerCompleteState = page.locator(homePageLocators.dailyTrackerCompleteStateLocator)
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

    async clickGlobalAddAppointmentBtn() {
        await this.globalAddAppointmentBtn.click()
    }

    async clickGlobalAddTodoBtn() {
        await this.globalAddTodoBtnLocator.click()
    }

    async clickGlobalAddMedicationBtn() {
        await this.globalAddMedicationBtn.click()
    }

    async clickGlobalAddNotenBtn() {
        await this.globalAddNoteBtn.click()
    }

    async clickGlobalAddDocumentBtn() {
        await this.globalAddNoteBtn.click()
    }

    async clickTrackAllFlow() {
        await this.trackAllFlowBtn.click()
    }

    async observeDailyTrackerCompleteState() {
        await this.dailyTrackerCompleteState.waitFor()
    }
    
    
}