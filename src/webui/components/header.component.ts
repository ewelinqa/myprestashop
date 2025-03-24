import { Locator, Page } from '@playwright/test';

export class HeaderComponent {
  contactUsLink: Locator;

  constructor(private page: Page) {
    this.contactUsLink = this.page.locator('#contact-link');
  }
}
