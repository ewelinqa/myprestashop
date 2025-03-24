import { Page } from '@playwright/test';

export class BasePage {
  url = '/';
  constructor(protected page: Page) {}

  async goTo(): Promise<void> {
    console.log('Navigating to:', this.url);
    await this.page.goto(this.url);
  }

  async title(): Promise<string> {
    return await this.page.title();
  }
}