//npx playwright test tests/locators/Xpath.ts --ui

import {test, expect} from '@playwright/test';

test('Xpath', async ({ page }) => {

await page.goto('https://practice.expandtesting.com/locators?utm_source=copilot.com');
await page.locator('//li[text()="Task 1: Review"]').click();
await page.locator('//table//tr[td[text()="Monitor"]]').click();
})

/*
🧭 Basic XPath Rules
Here are the essentials:

1. // means “search anywhere in the document”
Example:

Kod
//li
Finds all <li> elements anywhere on the page.

2. [condition] filters elements
Example:

Kod
//li[text()="Task 1: Review"]
Finds an <li> whose visible text is exactly "Task 1: Review".

3. tag[@attribute="value"] matches attributes
Example:

Kod
//button[@id="login"]
4. //tag1//tag2 means “tag2 inside tag1 at any depth”
Example:

Kod
//table//tr
Finds all <tr> rows inside a <table>.
*/


//XPath	Meaning
//tag	Find all elements with that tag
//tag[text()="X"]	Find element with exact text
//tag[@attr="value"]	Find element by attribute
//tag1//tag2	tag2 inside tag1
//tag[condition]	Filter elements
//tr[td[text()="X"]]	Table row containing a cell with text X