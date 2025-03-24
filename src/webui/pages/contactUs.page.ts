import { BasePage } from './base.page';
import { Locator, Page } from '@playwright/test';

export class ContactUsPage extends BasePage {
  url = '/index.php?controller=contact';
  subjectSelect: Locator;
  emailAddressInput: Locator;
  messageInput: Locator;
  sendButton: Locator;

  constructor(page: Page) {
    super(page);
    this.subjectSelect = this.page.locator('#id_contact');
    this.emailAddressInput = this.page.locator('#email');
    this.messageInput = this.page.locator('#contactform-message');
    this.sendButton = this.page.getByRole('button', { name: 'Send' });
  }
}
