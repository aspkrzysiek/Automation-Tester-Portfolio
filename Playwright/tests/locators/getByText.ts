//npx playwright test tests/locators/getByText.ts --ui

import {test, expect} from '@playwright/test'

test('Get by Text', async ({page}) =>{

await page.goto('https://practice.expandtesting.com/locators?utm_source=copilot.com');
await page.getByText('Hot Deal: Buy 1 Get 1 Free').click()
await page.getByText('Locators Test page for Automation Testing').click()
await page.getByText('Latest news and updates').click()



})
