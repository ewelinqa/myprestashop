import { HeaderComponent } from '../../../src/webui/components/header.component';
import { BasePage } from '../../../src/webui/pages/base.page';
import { test } from '@playwright/test';
import * as allure from 'allure-js-commons';

test.beforeEach(async ({ page }) => {
  const basePage = new BasePage(page);
  await basePage.goTo();
});

test('testName = "Create an account - all fields.", description = "Behavior = Positive"', async ({
  page,
}) => {
  await allure.link('PRESTASHOP-15', 'Test case: PRESTASHOP-16', 'testCase');
  await allure.severity(allure.Severity.BLOCKER);

  const headerComponent = new HeaderComponent(page);
  await headerComponent.signInButton.click();
});
