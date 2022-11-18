import { expect, Locator, Page } from '@playwright/test';
import { giftCodePageLocators } from './giftCodepageLocators';

export class GiftCodePage {
  readonly page: Page;
    firstNameInput: Locator;
    creditCardInput: Locator;
    creditCardDateInput: Locator;
    creditCardCCVInput: Locator;
    senderEmailInput: Locator;
    sumbitBtn: Locator;
    zipCode: Locator;
    receiverEmail: Locator;
    receiverName: Locator;
    gifterEmail: Locator;
    giftCode: Locator;

  constructor(page: Page) {
    this.firstNameInput = page.locator(giftCodePageLocators.firstNameLocator)
    this.senderEmailInput = page.locator(giftCodePageLocators.senderEmailLocator)
    this.sumbitBtn = page.locator(giftCodePageLocators.submitBtnLocator)
    this.zipCode = page.locator(giftCodePageLocators.zipCodeLocator)
    this.receiverEmail = page.locator(giftCodePageLocators.receiverEmailLocator)
    this.receiverName = page.locator(giftCodePageLocators.receiverNameLocator)
    this.gifterEmail = page.locator(giftCodePageLocators.gifterEmailLocator)
    this.giftCode = page.locator(giftCodePageLocators.giftCodeLocator)
    this.creditCardInput = page.frameLocator('[title="Secure card number input frame"]').locator('[aria-label="Credit or debit card number"]'),
    this.creditCardDateInput = page.frameLocator('[title="Secure expiration date input frame"]').locator('[aria-label="Credit or debit card expiration date"]'),
    this.creditCardCCVInput = page.frameLocator('[title="Secure CVC input frame"]').locator('[aria-label="Credit or debit card CVC/CVV"]');

  }

    async inputFirstName(firstName = `Name + ${Math.floor(Math.random() * 100000)}`) {
        await this.firstNameInput.fill(firstName)
    }

    async inputCreditCard(creditCard = `4242424242424242`) {
        await this.creditCardInput.fill(creditCard)
    }
    
    async inputCreditCardDate(date = `1135`) {
        await this.creditCardDateInput.fill(date)
    }

    async inputCreditCardCCV(ccv = `135`) {
        await this.creditCardCCVInput.fill(ccv)
    }

    async inputSenderEmail(email = `ivamtest+${Math.floor(Math.random() * 100000)}@spsoft.com`) {
        await this.senderEmailInput.fill(email)
    }

    async inputZipCode(zip = `11111`) {
        await this.zipCode.fill(zip)
    }

    async clickSubmitBtn() {
        await this.sumbitBtn.click()
    }

    async inputReceiverEmail(email = `receiverEmail+${Math.floor(Math.random() * 100000)}@spsoft.com`) {
        await this.receiverEmail.fill(email)
    }

    async inputReceiverName(name = `receiverName+${Math.floor(Math.random() * 100000)}`) {
        await this.receiverName.fill(name)
    }

    async inputGifterEmail(email = `ivantest+${Math.floor(Math.random() * 100000)}@spsoft.com`) {
        await this.gifterEmail.fill(email)
    }
    async grabGiftCode() {
        await this.receiverEmail.isHidden()
        const code = await this.giftCode.textContent()
        return {code}
    }

    async recieveGiftCode() {
        const email = `ivantest+fake${Math.floor(Math.random() * 100000)}@spsoft.com`
        
        await this.inputFirstName()
        await this.inputCreditCard()
        await this.inputCreditCardCCV()
        await this.inputCreditCardDate()
        await this.inputSenderEmail(email)
        await this.inputZipCode()
        await this.clickSubmitBtn()
        const value = await this.grabGiftCode()
        await this.inputReceiverEmail()
        await this.inputReceiverName()
        await this.inputGifterEmail(email)
        await this.clickSubmitBtn()
        return {value}
    }

}