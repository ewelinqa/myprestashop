import { PageTitles } from '../../../src/enums/titles.enums';
import { HeaderComponent } from '../../../src/webui/components/header.component';
import { MainMenuComponent } from '../../../src/webui/components/mainMenu.component';
import { BasePage } from '../../../src/webui/pages/base.page';
import { expect, test } from '@playwright/test';
import * as allure from 'allure-js-commons';

test.beforeEach(async ({ page }) => {
  const basePage = new BasePage(page);
  await basePage.goTo();
});

test('Check the Home Page title', { tag: '@smoke' }, async ({ page }) => {
  await allure.link('PRESTASHOP-1', 'Test case: PRESTASHOP-1', 'testCase');
  await allure.severity(allure.Severity.BLOCKER);

  await expect(page).toHaveTitle(PageTitles.HOME_PAGE);
});

test('Check the Contact Us Page title', { tag: '@smoke' }, async ({ page }) => {
  await allure.link('PRESTASHOP-2', 'Test case: PRESTASHOP-2', 'testCase');
  await allure.severity(allure.Severity.BLOCKER);

  const headerComponent = new HeaderComponent(page);
  await headerComponent.contactUsLink.click();
  await expect(page).toHaveTitle(PageTitles.CONTACT_US_PAGE);
});

test('Check the Clothes Page title', { tag: '@smoke' }, async ({ page }) => {
  await allure.link('PRESTASHOP-3', 'Test case: PRESTASHOP-3', 'testCase');
  await allure.severity(allure.Severity.BLOCKER);

  const mainMenuComponent = new MainMenuComponent(page);
  await mainMenuComponent.clothesLink.click();
  await expect(page).toHaveTitle(PageTitles.CLOTHES_PAGE);
});
