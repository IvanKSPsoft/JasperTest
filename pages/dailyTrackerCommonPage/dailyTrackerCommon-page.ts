import { Page, Locator } from '@playwright/test';
import { dailyTrackerLocators } from './dailyTrackerLocators';

export class DailyTrackerCommonPage {
    page: Page
    nextBtn: Locator;
    lastScreenText: Locator;
    temperatureFrame: Locator;
    temperatureFiled: Locator;
    saveBtn: Locator;
    weightFrame: Locator;
    weightField: Locator;
    blodPressureFrame: Locator;
    sustolicPressureField: Locator;
    diastolicPressureField: Locator;
    sleeFrame: Locator;
    sleepHoursField: Locator;
    sleepMinutesField: Locator;

    constructor(page: Page) {
        this.page = page
        this.nextBtn = page.locator(dailyTrackerLocators.nextBtnLocator)
        this.lastScreenText = page.locator(dailyTrackerLocators.lastScreenTextLocator)
        this.temperatureFrame = page.locator(dailyTrackerLocators.temperatureFrameLocator)
        this.temperatureFiled = page.locator(dailyTrackerLocators.temperatureFiledLocator)
        this.saveBtn = page.locator(dailyTrackerLocators.saveBtnLocator)
        this.weightFrame = page.locator(dailyTrackerLocators.weightFrameLocator)
        this.weightField = page.locator(dailyTrackerLocators.weightFieldLocator)
        this.blodPressureFrame = page.locator(dailyTrackerLocators.blodPressureFrameLocator)
        this.sustolicPressureField = page.locator(dailyTrackerLocators.sustolicPressureFieldLocator)
        this.diastolicPressureField = page.locator(dailyTrackerLocators.diastolicPressureFieldLocator)
        this.sleeFrame = page.locator(dailyTrackerLocators.sleeFrameLocator)
        this.sleepHoursField = page.locator(dailyTrackerLocators.sleepHoursFieldLocator)
        this.sleepMinutesField = page.locator(dailyTrackerLocators.sleepMinutesFieldLocator)
    }

    async trackMood(mood: "Anxious" | "Depressed" | "Okay") {
        await this.page.locator(`//*[text()="${mood}"]/../..`).click()
    }

    async clickNextBtn() {
        this.nextBtn.click()
    }

    async observeLastDailyTrackerScreen() {
        await this.lastScreenText.waitFor()
    }

    async trackSymptom(symptom: "Fatigue" | "Pain" | "Mouth and Throat Sores", rate: "Mild" | "Moderate" | "Severe" | "Very Severe" | "Not Experiencing") {
        await this.page.locator(`//*[text()="${symptom}"]`).click()
        await this.page.locator(`//*[text()="${rate}"]/../..`).click()
    }

    async trackTemperature(temperature = '120') {
        await this.temperatureFrame.click()
        await this.temperatureFiled.fill(temperature)
        await this.saveBtn.click()
        await this.page.locator(`//*[contains(text(),"${temperature}")]`).waitFor()
    }

    async trackWeight(weight = "170") {
        await this.weightFrame.click()
        await this.weightField.fill(weight)
        await this.saveBtn.click()
        await this.page.locator(`//*[contains(text(),"${weight}.00 lb")]`).waitFor()
    }

    async trackBlodPressure(sustolic = "110", diastolic ='90') {
        await this.blodPressureFrame.click()
        await this.sustolicPressureField.fill(sustolic)
        await this.diastolicPressureField.fill(diastolic)
        await this.saveBtn.click()
        await this.page.locator(`//*[contains(text(),"${sustolic} / ${diastolic} mm Hg")]`).waitFor()
    }

    async trackSleep(hours = "10", minute ='20') {
        await this.sleeFrame.click()
        await this.sleepHoursField.fill(hours)
        await this.sleepMinutesField.fill(minute)
        await this.saveBtn.click()
        await this.page.locator(`//*[contains(text(),"${hours} Hours ${minute} Mins")]`).waitFor()
    }

        
}