import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async goTo(): Promise<void> {
    await this.page.goto('/');
  }
}