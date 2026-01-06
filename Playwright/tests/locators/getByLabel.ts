//npx playwright test tests/locators/getByLabel.ts --ui

import {test, expect} from '@playwright/test'

test('GetByLabel', async({page}) => {
await page.goto('https://practice.expandtesting.com/locators?utm_source=copilot.com');
const selectCountry = page.getByLabel('Choose a country');
await selectCountry.selectOption('France');
await selectCountry.selectOption('Japan');
await selectCountry.selectOption('Brazil');
await expect(selectCountry).toHaveValue('Brazil');

const EmailForNewsletter = page.getByLabel('Email for newsletter');
await EmailForNewsletter.fill('someEmail@gmail.com')

});