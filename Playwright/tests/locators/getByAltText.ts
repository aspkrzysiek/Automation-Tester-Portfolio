//npx playwright test tests/locators/getByAltText.ts --ui

import {test,expect} from '@playwright/test'

test('tests getByAltText', async ({page}) => {
await page.goto('https://practice.expandtesting.com/locators?utm_source=copilot.com');
await page.getByAltText('User avatar').click();
});