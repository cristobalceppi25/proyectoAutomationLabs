import { Locator, Page } from "@playwright/test";
import { userLoginValidData } from "../data/testData";

export class UserLogin {
  readonly userEmail: Locator
  readonly userPassword: Locator
  readonly loginButton: Locator


  constructor(page: Page) {
    this.userEmail = page.getByTestId('login-email-input')
    this.userPassword = page.getByTestId('login-password-input')
    this.loginButton = page.getByTestId('login-submit-btn')
  }


  async userLogin() {
    await this.userEmail.fill(userLoginValidData.email)
    await this.userPassword.fill(userLoginValidData.password)
    await this.loginButton.click()
  }
}