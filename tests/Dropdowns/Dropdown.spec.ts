import { test } from '@playwright/test'

test(`Handling dropdowns in demo site`, async ({ page }) => {


    await page.goto('https://leafground.com/select.xhtml');

    // Step2 - Select your favorite UI automation tool using the different select options - //select[contains(@id,'city_input')]

    await page.selectOption('.formgrid select.ui-selectonemenu', { label: 'Selenium' });

    // Step3 - Get the count and print of all the values

    let Tool_dd_values = page.locator('.formgrid select.ui-selectonemenu option');

    console.log(`Total UI tools available in the dropdown - ` + await Tool_dd_values.count());

    for (let index = 0; index < await Tool_dd_values.count(); index++) {

        console.log(await Tool_dd_values.nth(index).innerText());

    }

    // Step4 -  Choose your preferred Country

    await page.locator('//div[contains(@id,"country") and (@aria-owns)]').click();

    let countries_dd = page.locator('//ul[contains(@id,"country_items")]/li');
    let countries_count = await countries_dd.count();

    for (let i = 0; i < countries_count; i++) {

        console.log(await countries_dd.nth(i).textContent());

        if (await countries_dd.nth(i).textContent() === 'India') {

            await countries_dd.nth(i).click();
            break;

        }

    }

    //Step6 -  Choose any three courses from the dropdown

    await page.locator('.ui-autocomplete-dropdown').click();
    sleep(5000);
    await page.locator('//li[text()="Appium"]').click();
    await page.locator('.ui-autocomplete-dropdown').click();
    sleep(5000);
    await page.locator('//li[text()="Playwright"]').click();
    await page.locator('.ui-autocomplete-dropdown').click();
    sleep(5000);
    await page.locator('//li[text()="JMeter"]').click();

    sleep(5000);
   
    await page.locator('//div[contains(@id,"lang") and @aria-owns]').click();

    let languages = page.locator('//ul[contains(@id,"lang_items")]/li');

    console.log('Count of Languages - ' + await languages.count());

    for (let lang = 0; lang < await languages.count(); lang++) {

        console.log(await languages.nth(lang).innerText());

        if (await languages.nth(lang).innerText() === 'Hindi') {

            await languages.nth(lang).click();
        }


    }


    //await page.waitForTimeout(10000);


});

function sleep(sleeptime: number | undefined) {
    return new Promise(resolve => setTimeout(resolve, sleeptime));
}