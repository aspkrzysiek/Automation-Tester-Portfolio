//npx playwright test getByRole.ts --ui
import {test,expect} from'@playwright/test'

test
('Playwright locators practice - GetByRole', async ({page}) => 
{
await page.goto("https://ultimateqa.com/");
await expect(page).toHaveTitle('Homepage - Ultimate QA');
//Link
await page.getByRole('link', {name:'Selenium Resources'}).click();
await expect(page).toHaveURL('https://ultimateqa.com/best-selenium-webdriver-resources/');
//Link
await page.getByRole('link', {name:'Automation Exercises'}).click();
await expect(page).toHaveURL('https://ultimateqa.com/automation/');
//Heading
await expect(page.getByRole('heading', {name:'Automation Practice', level:1})).toBeVisible();
//Link
await expect(page.getByRole('link', {name: 'Fill out forms'})).toBeVisible();

await page.goto("https://ultimateqa.com/contact/");
//Button
await page.getByRole('button', {name: 'Submit'}).click();
//Textbox
await page.getByRole('textbox', {name: 'Name'}).fill('Krzysiek');

//Checkbox
await page.goto('https://practice.expandtesting.com/checkboxes');
const checkbox1 = page.getByRole('checkbox', {name: 'Checkbox 1'});
const checkbox2 = page.getByRole('checkbox', {name: 'Checkbox 2'});

await expect(checkbox1).not.toBeChecked();
await expect(checkbox2).toBeChecked();

await checkbox1.check();
await checkbox2.uncheck();

await expect(checkbox1).toBeChecked();
await expect(checkbox2).not.toBeChecked();

await page.goto('https://qa-automation-practice.netlify.app/radiobuttons.html');
const radiobutton1 = page.getByRole('radio', {name:'Radio button 1'});
const radiobutton2 = page.getByRole('radio', {name:'Radio button 2'});
const radiobutton3 = page.getByRole('radio', {name:'Radio button 3'});
const radiobutton4 = page.getByRole('radio', {name:'Radio button 4'});
await radiobutton1.check();
await expect(radiobutton1).toBeChecked();
await expect(radiobutton2).not.toBeChecked();
await expect(radiobutton3).not.toBeChecked();
await expect(radiobutton4).toBeDisabled();

//Button 





















});