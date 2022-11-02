import { Page } from '@playwright/test';
import { HomePage } from './homePage/home-page';
import { SignUpPage } from './signUpPage/signUp-page';


export class App {
    page: Page;
    signUpPage: SignUpPage;
    homePage: HomePage;

    constructor(page: Page) {
        this.page = page
        this.signUpPage = new SignUpPage(page)
        this.homePage = new HomePage(page)
    }
}