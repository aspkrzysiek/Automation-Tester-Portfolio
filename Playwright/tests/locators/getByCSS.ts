//npx playwright test tests/locators/getByCSS.ts --ui

import { test, expect } from '@playwright/test';

test('tests getByCSS', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/locators?utm_source=copilot.com');

  // Correct CSS selector
  const legacyButton = page.locator('.legacy-css.text-primary');

  await legacyButton.click();
  await expect(legacyButton).toBeVisible();
});
