//npx playwright test tests/locators/getByPlaceholder.ts --ui

import {test, expect} from '@playwright/test'
test('getByplaceholder tests', async ({page}) =>{
await page.goto('https://practice.expandtesting.com/locators?utm_source=copilot.com');
await page.getByPlaceholder('Search the site').fill('Entered text');
await page.getByPlaceholder('Filter by tag').fill('tagname');

}
)