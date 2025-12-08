import { chromium, test } from "@playwright/test";


test("Test to launch a browser",async ({page})=>{



    const apppage = await (await ((await chromium.launch()).newContext()).newPage());

await apppage.goto(`https://login.salesforce.com/`);

await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com');
await page.locator('.password').fill('TestLeaf@2025');
await page.locator('input[name="Login"]').click();


});