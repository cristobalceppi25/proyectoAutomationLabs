import { expect, Locator, Page, test } from "@playwright/test";


export class UserData {
  readonly userFirstName: Locator
  readonly userLastName: Locator
  readonly userEmail: Locator
  readonly userPhone: Locator
  readonly userGender: Locator
  readonly userDoB: Locator
  readonly userCountry: Locator
  readonly userPassword: Locator
  readonly userConfirmPassword: Locator
  readonly gotoPageButton: Locator
  readonly registerButton: Locator


  constructor(page: Page) {
    this.userFirstName = page.getByTestId('register-firstname-input')
    this.userLastName = page.getByTestId('register-lastname-input')
    this.userEmail = page.getByTestId('register-email-input')
    this.userPhone = page.getByTestId('register-phone-input')
    this.userGender = page.getByTestId('register-gender-male')
    this.userDoB = page.getByTestId('register-dob-input')
    this.userCountry = page.getByTestId('register-country-select')
    this.userPassword = page.getByTestId('register-password-input')
    this.userConfirmPassword = page.getByTestId('register-confirm-password-input')
    this.gotoPageButton = page.getByTestId('register-link')
    this.registerButton = page.getByTestId('register-submit-btn')
  }
}