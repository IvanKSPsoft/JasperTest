import { Page } from '@playwright/test';
import { HomePage } from './homePage/home-page';
import { LoginPage } from './loginPage/login-page';
import { PlannerPage } from './plannerPage/planner-page';
import { SignUpPage } from './signUpPage/signUp-page';

export class App {
    page: Page;
    signUpPage: SignUpPage;
    homePage: HomePage;
    plannerPage: PlannerPage;
    loginPage: LoginPage;

    constructor(page: Page) {
        this.page = page
        this.signUpPage = new SignUpPage(page)
        this.homePage = new HomePage(page)
        this.plannerPage = new PlannerPage(page)
        this.loginPage = new LoginPage(page)
    }
}