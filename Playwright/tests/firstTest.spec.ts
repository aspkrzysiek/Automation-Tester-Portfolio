import { test, expect } from '@playwright/test';

test.describe('1st test suite', () => {

    test('1st test subtest', async ({ page }) => {
        await page.goto('https://playwright.dev/');
        await expect(page).toHaveTitle(/Playwright/); // optional assertion
    });

    test('2nd test subtest', async ({ page }) => {
        await page.goto('...');
        await expect(page).toHaveTitle(/.../); // optional assertion
    });

});
