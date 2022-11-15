import { Locator, Page } from '@playwright/test';
import { testData } from '../utils/dataset';
import { signUpLocators } from './signUpLocators';


export class SignUpPage {
    page: Page;
    userType1: Locator;
    firstNameField: Locator;
    lastNameFied: Locator;
    dobField: Locator;
    biologicalSexField: Locator;
    sexFemaleOption: Locator;
    zipCodeFeild: Locator;
    submitButton: Locator;
    emailFeild: Locator;
    passwordField: Locator;
    confirmPasswordField: Locator;
    tosCheckbox: Locator;
    welcomeModalText: Locator;
    pharmacyField: Locator;
    specificPharmacy: Locator;
    specificCancerType: Locator;
    treatmentPage: Locator;
    connectPageText: Locator;
    interestsPageText: Locator;

    constructor(page: Page) {
        this.page = page
        this.userType1 = page.locator(signUpLocators.userType1Locator)
        this.firstNameField = page.locator(signUpLocators.firstNameFieldLocator)
        this.lastNameFied = page.locator(signUpLocators.lastNameFiedlLocator)
        this.dobField = page.locator(signUpLocators.dobFieldLocator)
        this.biologicalSexField = page.locator(signUpLocators.biologicalSexFieldLocator)
        this.sexFemaleOption = page.locator(signUpLocators.sexFemaleOptionLocator)
        this.zipCodeFeild = page.locator(signUpLocators.zipCodeFeildLocator)
        this.submitButton = page.locator(signUpLocators.submitButtonLocator)
        this.emailFeild = page.locator(signUpLocators.emailFeildLocator)
        this.passwordField = page.locator(signUpLocators.passwordFieldLocator)
        this.confirmPasswordField = page.locator(signUpLocators.confirmPasswordFieldLocator)
        this.tosCheckbox = page.locator(signUpLocators.tosCheckboxLocator)
        this.welcomeModalText = page.locator(signUpLocators.welcomeModalTextLocator)
        this.pharmacyField = page.locator(signUpLocators.pharmacyFieldLocator)
        this.specificPharmacy = page.locator(signUpLocators.specificPharmacyLocator)
        this.specificCancerType = page.locator(signUpLocators.specificCancerTypeLocator)
        this.treatmentPage = page.locator(signUpLocators.treatmentPageLocator)
        this.connectPageText = page.locator(signUpLocators.connectPageTextLocator)
        this.interestsPageText = page.locator(signUpLocators.interestsPageTextLocator)
    }

    async open() {
        await this.page.goto('/signup')
    }

    async createNewUser() {
        await this.open()
        await this.selectUserType()
        await this.inputUserInfo(testData.randomFirstName, testData.randomLastName)
        await this.inputAccountData(testData.email, testData.password)
        await this.observeWelcomeModal()
        await this.inputAdditionalInfo()
        await this.selectCancerType()
        await this.observeTreatmentPage()
        await this.observeConnectionPage()
        await this.observeInterestsPage()
    }

    async selectUserType() {
        await this.userType1.click()
    }

    async inputUserInfo(firstName: string, lastName: string) {
        await this.firstNameField.fill(firstName)
        await this.lastNameFied.fill(lastName)
        await this.dobField.fill('01012000')
        await this.biologicalSexField.click()
        await this.sexFemaleOption.click()
        await this.zipCodeFeild.fill('11111')
        await this.submitButton.click()
    }

    async inputAccountData(email: string, password: string) {
        await this.emailFeild.fill(email)
        await this.passwordField.fill(password)
        await this.confirmPasswordField.fill(password)
        await this.tosCheckbox.click()
        await this.submitButton.click()
    }

    async observeWelcomeModal() {
        await this.welcomeModalText.waitFor()
        await this.submitButton.click()
    }
    
    async inputAdditionalInfo() {
        await this.pharmacyField.click()
        await this.specificPharmacy.click()
        await this.page.locator('[data-testing="button-submit"]', {hasText: 'Done'}).click()
        await this.page.locator('[data-testing="button-submit"]', {hasText: 'Done'}).waitFor({state: 'hidden'})
        await this.submitButton.click()
    }

    async selectCancerType() {
        await this.specificCancerType.click()
        await this.submitButton.click()
    }

    async observeTreatmentPage() {
        await this.treatmentPage.waitFor()
        await this.submitButton.click()
    }

    async observeConnectionPage() {
        await this.connectPageText.waitFor()
        await this.submitButton.click()
    }

    async observeInterestsPage() {
        await this.interestsPageText.waitFor()
        await this.submitButton.click()
    }

}