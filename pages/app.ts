import { Page } from '@playwright/test';
import { DailyTrackerCommonPage } from './dailyTrackerCommonPage/dailyTrackerCommon-page';
import { GiftCodePage } from './giftCodePage/giftCode-page';
import { HomePage } from './homePage/home-page';
import { LoginPage } from './loginPage/login-page';
import { PaymentPage } from './paymentPage/payment-page';
import { PlannerPage } from './plannerPage/planner-page';
import { ProfilePage } from './profilePage/profile-page';
import { SignUpPage } from './signUpPage/signUp-page';

export class App {
    page: Page;
    signUpPage: SignUpPage;
    homePage: HomePage;
    plannerPage: PlannerPage;
    loginPage: LoginPage;
    profilePage: ProfilePage;
    paymentPage: PaymentPage;
    giftCodePage: GiftCodePage;
    dailyTrackerPage: DailyTrackerCommonPage;

    constructor(page: Page) {
        this.page = page
        this.signUpPage = new SignUpPage(page)
        this.homePage = new HomePage(page)
        this.plannerPage = new PlannerPage(page)
        this.loginPage = new LoginPage(page)
        this.profilePage = new ProfilePage(page)
        this.paymentPage = new PaymentPage(page)
        this.giftCodePage = new GiftCodePage(page)
        this.dailyTrackerPage = new DailyTrackerCommonPage(page)
    }
}