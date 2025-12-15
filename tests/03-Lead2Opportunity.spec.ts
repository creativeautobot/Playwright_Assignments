import{expect, test} from '@playwright/test';


let user:{

    firstname: string,
    lastname: string,
    comp_name: string
    Account_name: string,
    Account_number: number
  } = {

    firstname : 'Rajsekhar',
    lastname : 'Test',
    comp_name: 'Icentris',
    Account_name: 'Test Account',
    Account_number: 12345
  };


test.use({storageState: 'Data1/login_SF1.json' })
test.skip(`Verify Lead Creation and Conversion to Opportunity`,async({page})=>{

  // let user:{

  //   firstname: string,
  //   lastname: string,
  //   comp_name: string
  // } = {

  //   firstname : 'Rajsekhar',
  //   lastname : 'Test',
  //   comp_name: 'Icentris'
  // };

await page.goto('https://testleaf.lightning.force.com/lightning/page/home');
await page.locator('.slds-icon-waffle').click();
//await page.locator('button[aria-label="View All Applications"]').click();
await page.locator('//p[text()="Marketing CRM Classic"]').click();
const Leads_Lnk = page.locator('//span[text()= "Leads" and @class="slds-truncate"]/parent::a');
await page.waitForTimeout(5000);
await Leads_Lnk.click();
await page.locator('//a[@title="New"]').click();
await page.locator('button[aria-label="Salutation"]').click();
await page.locator('//span[text()="Mr."]').click();
await page.getByPlaceholder('First Name').fill(user.firstname);
await page.getByPlaceholder('Last Name').fill(user.lastname);
await page.locator('input[name="Company"]').fill(user.comp_name);
await page.locator('//button[text()="Save"]').click();

await page.locator('button[name="Convert"]').click();
await page.locator('.slds-button_stretch').last().click();
await page.locator('//label//span[text()="Opportunity Name"]/following::input[@class=" input"]').fill(user.comp_name);
await page.locator('span.targetingSpan>button').click();
await page.locator('//button[text()="Go to Leads"]').click();


const search_box = page.getByPlaceholder('Search this list...');
await search_box.fill(user.firstname);
await search_box.press('Enter');

await expect(page.locator('//h3[text()="Nothing to see here"]')).toBeVisible();

await page.locator('//a[@title="Opportunities"]').click();
await search_box.fill(user.comp_name);

//await page.waitForTimeout(5000);
await search_box.press('Enter');
await page.waitForTimeout(5000);
let table_rows = await page.locator('table.slds-table tr').count();

if(table_rows>1){

  console.log('Congratulations!!!, Found the Lead converted to Opportunity!!')
  await page.locator(`//tr//a[@title="${user.comp_name}"]`).first().click();
}
else{

  console.log('Opportunity not found!!')
}


});

test(` Create and verify a New Case in Chatter`,async({page})=>{

  await page.goto('https://orgfarm-f2768ddff7-dev-ed.develop.lightning.force.com/lightning/page/home');
  await page.locator('.slds-icon-waffle').click();
  await page.locator('//p[text()="Service"]').click();
  await page.waitForTimeout(5000);
  await page.locator('//span[text()= "Cases"]/parent::a').click();
  await page.locator('//a[@title="New"]').click();
  await page.getByPlaceholder('Search Contacts...').click();
  await page.locator('//span[text()="New Contact"]').click();
  await page.locator('button[aria-label="Salutation"]').click();
  await page.locator('//span[text()="Mr."]').click();
  await page.getByPlaceholder('First Name').fill(user.firstname);
  await page.getByPlaceholder('Last Name').fill(user.lastname);
  await page.locator('//button[text()="Save"]').last().click();

  let toastMessage = await page.locator('.toastMessage').innerText();

  expect(toastMessage).toBe(`Contact "Mr. ${user.firstname} ${user.lastname}" was created.`)

  await page.waitForTimeout(5000);
  await page.getByPlaceholder('Search Accounts...').first().click();
  await page.locator('//span[text()="New Account"]').click();
  await page.locator('input[name="Name"]').fill(user.Account_name);
  await page.locator('input[name="AccountNumber"]').fill(String(user.Account_number));
  await page.locator('button[aria-label="Rating"]').click();
  await page.locator('//span[text()="Hot"]').click();
  await page.waitForTimeout(5000);
  await page.locator('//button[text()="Save"]').last().click(); 

  let Actual_toast_message = await page.locator('.toastMessage').innerText();

  expect(Actual_toast_message).toContain(`Account "${user.Account_name}" was created`);

  await page.locator('button[aria-label="Status"]').click();
  await page.locator('//span[text()="New" and @class="slds-truncate"]').click();
  await page.locator('button[aria-label="Priority"]').click();
  await page.locator('span[title="High"]').click();
  await page.locator('button[aria-label="Case Origin"]').click();
  await page.locator('span[title="Email"]').click();
  await page.locator('input[name="Subject"]').fill('Product Return Request');
  await page.locator('.slds-form-element__label+div textarea').first().fill('Requesting a return for a defective product');
  await page.locator('//button[text()="Save"]').click();

  console.log(Actual_toast_message);
  expect(Actual_toast_message).toContain('was created');







  

  //await page.waitForTimeout(20000);





  





});