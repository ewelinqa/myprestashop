import { BasePage } from './base.page';
import { Locator, Page } from '@playwright/test';

export class ClothesPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
}
