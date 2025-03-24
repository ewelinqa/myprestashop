import { Locator, Page } from '@playwright/test';

export class MainMenuComponent {
  clothesLink: Locator;

  constructor(private page: Page) {
    this.clothesLink = page.getByRole('link', { name: 'Clothes' });
  }
}
