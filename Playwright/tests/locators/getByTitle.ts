//npx playwright test tests/locators/getByTitle.ts --ui

import { test, expect } from '@playwright/test';

test('hover over settings button using getByTitle', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/locators?utm_source=copilot.com');

  const settings = page.getByTitle('Settings panel');

  await settings.hover();

  await expect(settings).toHaveAttribute('title', 'Settings panel');
});
