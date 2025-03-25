import { BasePage } from './base.page';
import { Locator, Page } from '@playwright/test';

export class CreateAccountPage extends BasePage {
  genderMrRadioButton: Locator;
  genderMrsRadioButton: Locator;
  customerFirstNameField: Locator;
  customerLastNameField: Locator;
  customerEmailField: Locator;
  customerPasswordField: Locator;
  customerBirthDateField: Locator;
  privacyCheckbox: Locator;
  termsAndConditionsCheckbox: Locator;
  saveButton: Locator;

  constructor(page: Page) {
    super(page);
    this.genderMrRadioButton = this.page.locator('#field-id_gender-1');
    this.genderMrsRadioButton = this.page.locator('#field-id_gender-2');
    this.customerFirstNameField = this.page.locator('#field-firstname');
    this.customerLastNameField = this.page.locator('#field-lastname');
    this.customerEmailField = this.page.locator('#field-email');
    this.customerPasswordField = this.page.locator('#field-password');
    this.customerBirthDateField = this.page.locator('#field-birthday');
    this.privacyCheckbox = this.page.locator("[name='customer_privacy']");
    this.termsAndConditionsCheckbox = this.page.locator("[name='psgdpr']");
    this.saveButton = this.page.locator("[data-link-action='save-customer']");
  }

  async setCustomerFirstName(firstName: string) {
    await this.customerFirstNameField.fill(firstName);
  }
  async setCustomerLastName(lastName: string) {
    await this.customerLastNameField.fill(lastName);
  }
  async setCustomerEmail(email: string) {
    await this.customerEmailField.fill(email);
  }
  async setCustomerPassword(password: string) {
    await this.customerPasswordField.fill(password);
  }
  async setCustomerBirthDate(birthDate: string) {
    await this.customerBirthDateField.fill(birthDate);
  }
  async checkPrivacyCheckbox() {
    await this.privacyCheckbox.check();
  }
  async checkTermsAndConditionsCheckbox() {
    await this.termsAndConditionsCheckbox.check();
  }
  async clickSaveButton() {
    await this.saveButton.click();
  }

}
