import { test, expect } from '@playwright/test';

test.describe('Automated Swag Labs', () => {

    test('login as standard user', async ({ page }) => {
        //learn 1
        await page.goto('https://www.saucedemo.com/');
        await expect(page).toHaveTitle("Swag Labs");
        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        //learn 2
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        //learn 3
        await page.locator('.inventory_item', { hasText: 'Sauce Labs Backpack' })
          .getByRole('button', { name: 'Add to cart' })
          .click();
          const cartBadge = page.locator('.shopping_cart_badge');
          await expect(cartBadge).toHaveText('1');

    });

});
