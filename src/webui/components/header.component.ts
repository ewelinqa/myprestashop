import { Locator, Page } from '@playwright/test';

export class HeaderComponent {
  contactUsLink: Locator;
  signInButton: Locator;

  constructor(private page: Page) {
    this.contactUsLink = this.page.locator('#contact-link');
    this.signInButton = this.page.locator('.user-info');
  }
}
