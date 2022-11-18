import { expect, Locator, Page } from '@playwright/test';
import { App } from '../app';
import { paymentPageLocators } from './paymentPageLocators';

export class PaymentPage {
  readonly page: Page;
  getCoachBtn: Locator;
  giftCodeField: Locator;
  subscribeBtn: Locator;
  creditCardInput: Locator;
  creditCardDateInput: Locator;
  creditCardCCVInput: Locator;
  getStartedBtn: Locator;
  payAndSubscribeBtn: Locator;
  giftCodeSubscribeBtn: Locator;
  tryForFreeBtn: Locator;
  continuePremSubscrBtn: Locator;
  creditCardName: Locator;
  creditCardZip: Locator;
  gotItBtn: Locator;
  reedemBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getCoachBtn = page.locator(paymentPageLocators.getCoachBtnLocator)
    this.giftCodeField = page.locator(paymentPageLocators.giftCodeFieldLocator)
    this.subscribeBtn= page.locator(paymentPageLocators.subscribeBtnLocator)
    this.creditCardInput = page.frameLocator('[title="Secure card number input frame"]').locator('[aria-label="Credit or debit card number"]'),
    this.creditCardDateInput = page.frameLocator('[title="Secure expiration date input frame"]').locator('[aria-label="Credit or debit card expiration date"]'),
    this.creditCardCCVInput = page.frameLocator('[title="Secure CVC input frame"]').locator('[aria-label="Credit or debit card CVC/CVV"]'),
    this.getStartedBtn = page.locator(paymentPageLocators.getStartedBtnLocator),
    this.payAndSubscribeBtn = page.locator(paymentPageLocators.payAndSubscribeBtnLocator)
    this.giftCodeSubscribeBtn = page.locator(paymentPageLocators.giftCodeSubscribeBtnLocator)
    this.tryForFreeBtn = page.locator(paymentPageLocators.tryForFreeBtnLocator)
    this.continuePremSubscrBtn = page.locator(paymentPageLocators.continuePremSubscrBtnLocator)
    this.creditCardName = page.locator(paymentPageLocators.creditCardNameLocator)
    this.creditCardZip = page.locator(paymentPageLocators.creditCardZipLocator)
    this.gotItBtn = page.locator(paymentPageLocators.gotItBtnLocator)
    this.reedemBtn = page.locator(paymentPageLocators.reedemBtnLocator)

  }

  async openPremimSignUpPage() {
    await this.page.goto('https://premium.hellojasper.dev/signup')
  }

  async open() {
    await this.page.goto('/profiles/subscriptions')
  }

  async subscribeToCarePlus() {
    const app = new App(this.page)
    await this.open()
    await this.clickGetCoachBtn()
    await this.inputCreditCardDetailes()
    await this.clickPayAndSubscribeBtn()
    await this.clickGetStartedBtn()
    await this.clickGotItBtn()
    await app.plannerPage.observeDefaultSharedActions()
  }

  async clickGetCoachBtn() {
    await this.getCoachBtn.click()
  }

  async inputGiftCode(code: string) {
    await this.giftCodeField.fill(code)
  }

  async clickSubscribeBtn() {
    await this.subscribeBtn.click()
  }

  async clickPayAndSubscribeBtn() {
    await this.payAndSubscribeBtn.click()
    await this.page.waitForLoadState('networkidle')
  }

  async clickTryForFreeBtn() {
    await this.tryForFreeBtn.click()
  }

  async clickGiftCodeSubscribeBtn() {
    await this.giftCodeSubscribeBtn.click()
  }

  async clickGotItBtn() {
    await this.gotItBtn.click()
  }

  async clickContinuePremSubscrBtn() {
    await this.continuePremSubscrBtn.click()
  }

  async inputCreditCardDetailes(creditCard = `4242424242424242`, date = '1135', ccv = '555') {
    await this.creditCardInput.fill(creditCard)
    await this.creditCardDateInput.fill(date)
    await this.creditCardCCVInput.fill(ccv)
  }
  
  async clickGetStartedBtn() {
    await this.getStartedBtn.click()
  }

  async inputCreditCardName(name: string) {
    await this.creditCardName.fill(name)
  }

  async inputCreditCardZip(zip: string) {
    await this.creditCardZip.fill(zip)
  }

  async paywithGiftCode(giftCode: string) {
    await this.giftCodeField.fill(giftCode)
    await this.reedemBtn.click()
    await this.page.waitForLoadState('networkidle')
  }
     
}