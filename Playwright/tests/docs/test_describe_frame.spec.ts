//npx playwright test 1_test describe.spec.ts --ui

import {test, expect} from '@playwright/test'

test.describe
('Test Suite 1', () => 
    {
        test
        ('Subtest 1', async ({page}) =>
        {
        await page.goto('https://www.saucedemo.com/');
        await expect(page).toHaveTitle(/Swag Labs/);
        //regex /Swag Labs/
        }
        );

        test
        ('Subtest 2', async ({page}) =>
        {
        await page.goto('https://www.saucedemo.com/');
        await expect(page).toHaveTitle("Swag Labs");
        //exact text match "Swag Labs"
        }
        );
    }
)

test.describe
('Test Suite 2', () =>
    {
        test
        ('Subtest 1', async ({page}) => 
        {
        await page.goto('https://www.saucedemo.com/');
        await expect(page).toHaveTitle("Swag Labs");
        }
        );

        test
        ('Subtest 2', async ({page}) =>
        {
        await page.goto('https://www.saucedemo.com/')
        await expect(page).toHaveTitle("Swag Labs");
        }
        );
    }

)
