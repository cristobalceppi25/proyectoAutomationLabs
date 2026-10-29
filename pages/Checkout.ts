import { expect, Locator, Page, test } from "@playwright/test";
import { userValidData } from '../data/testData'

export class UserDataCheckout {
  readonly userFirstName: Locator
  readonly userLastName: Locator
  readonly userEmail: Locator
  readonly userPhone: Locator
  readonly userAddress: Locator
  readonly userState: Locator
  readonly continueButton: Locator
  readonly userCity: Locator
  readonly userPin: Locator
  readonly finishButton: Locator

  constructor(page: Page) {
    this.userFirstName = page.getByTestId('checkout-firstname-input')
    this.userLastName = page.getByTestId('checkout-lastname-input')
    this.userEmail = page.getByTestId('checkout-email-input')
    this.userPhone = page.getByTestId('checkout-phone-input')
    this.userAddress = page.getByTestId('checkout-address-input')
    this.userState = page.getByTestId('checkout-state-input')
    this.userCity = page.getByTestId('checkout-city-input')
    this.userPin = page.getByTestId('checkout-pincode-input')
    this.continueButton = page.getByTestId('continue-btn')
    this.finishButton = page.getByTestId('place-order-btn')
  }

  async userDataCheckout() {
    await this.userFirstName.fill(userValidData.name)
    await this.userLastName.fill(userValidData.lastName)
    await this.userEmail.fill(userValidData.email)
    await this.userPhone.fill(userValidData.phone)
    await this.userAddress.fill(userValidData.address)
    await this.userState.fill(userValidData.state)
    await this.userCity.fill(userValidData.city)
    await this.userPin.fill(userValidData.pin_code)
    await this.continueButton.click()
  }
}