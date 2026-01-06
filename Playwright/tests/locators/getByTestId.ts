//npx playwright test tests/locators/getByTestId.ts --ui

import {test, expect} from '@playwright/test';

test('getByTestId example', async ({ page }) => {
await page.goto('https://practice.expandtesting.com/locators?utm_source=copilot.com');
await page.getByTestId('status-message').click();
});