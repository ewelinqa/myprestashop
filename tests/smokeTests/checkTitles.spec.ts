import { PageTitles } from '../../src/enums/titles.enums';
import { BasePage } from '../../src/pages/base.page';
import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  const basePage = new BasePage(page);
  await basePage.goTo();
});


test('Check the Home Page title', async ({ page }) => {
  await expect(page).toHaveTitle(PageTitles.HomePageTitle);
});
