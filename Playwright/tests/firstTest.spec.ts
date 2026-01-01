import { test, expect } from '@playwright/test';

test.describe('1st test suite', () => {

    test('login to saucedemo', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await expect(page).toHaveTitle("Swag Labs");
        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Passowrd').fill('secret_sauce');
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    });

});
