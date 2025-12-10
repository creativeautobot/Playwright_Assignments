import {expect, test} from '@playwright/test'


test(`Assertions Assignment`,async({page})=>{


await page.goto('https://leafground.com/input.xhtml');

let textbox_disabled = page.getByPlaceholder('Disabled');

await expect(textbox_disabled).toBeDisabled();

console.log('This is an Assertion test');

//Step3 - Validate an Enabled Textbox

const editable_textbox = page.getByPlaceholder('Your email and tab');

await expect(editable_textbox).toBeEditable();

await editable_textbox.fill('Rajasekhar');

//await expect.soft(page.locator('input[value="My learning is superb so far."]')).toBeDisabled();

//Step4 -  Fill Data

const inputLocator = page.locator('input[value="Can you clear me, please?"]');

await inputLocator.fill('Playwright Learning');

expect(await inputLocator.inputValue()).toBe('Playwright Learning');

console.log(await inputLocator.inputValue());

await page.waitForTimeout(15000);








});