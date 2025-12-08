import {chromium, firefox, test, webkit} from "@playwright/test"


test(`Launching Redbus in Edge Browser`, async()=>{


    const browser = await chromium.launch({channel:'chrome'});
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.redbus.in/');
    console.log(`Browser - ${browser.browserType().name()}`);
    console.log(`Page Title :`+ await page.title());
    console.log(`Page URL :`+ page.url());
    await page.waitForTimeout(10000);

});

test(`Launching Flipkart in WebKit Browser`,async()=>{

    const webkit_browser = await webkit.launch();
    const webkit_contxt = await webkit_browser.newContext();
    const flipkart_page = await webkit_contxt.newPage();

    await flipkart_page.goto('https://www.flipkart.com/');

    console.log(`Browser - ${webkit_browser.browserType().name()}`);
    console.log(`Page Title :`+ await flipkart_page.title());
    console.log(`Page URL :`+ flipkart_page.url());
    
});