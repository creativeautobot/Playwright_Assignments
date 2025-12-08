import {test} from '@playwright/test'

test.skip(`Create a Lead`,async({page})=>{


    
    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.locator('#username').fill('Demosalesmanager');
    await page.locator('#password').fill('crmsfa');
    await page.locator('.decorativeSubmit').click();
    await page.locator('.crmsfa>a>img').click();

    await page.locator('.shortcuts>li').nth(0).click();
    await page.locator('#createLeadForm_companyName').fill('TestLeaf');
    await page.locator('#createLeadForm_firstName').fill('Karthik');
    await page.locator('#createLeadForm_lastName').fill('Testing');
    await page.locator('#createLeadForm_personalTitle').fill('Mr');
    await page.locator('#createLeadForm_generalProfTitle').fill('Test Engineer');
    await page.locator('#createLeadForm_annualRevenue').fill('200000');
    await page.locator('#createLeadForm_departmentName').fill('QA');
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('9879826544');
    await page.locator('.smallSubmit').click();
    let company_name = await page.locator('#viewLead_companyName_sp').textContent();
    console.log(company_name);
    //company_name?.replace(')',"").split('(')[1];
    let LeadId = company_name?.replace(')',"").split('(')[1];;
    console.log(LeadId);
    let First_name = await page.locator('#viewLead_firstName_sp').textContent();
    let last_name = await page.locator('#viewLead_lastName_sp').textContent();
    let status = await page.locator('#viewLead_statusId_sp').innerText();
 
    if((company_name?.includes('TestLeaf')) && (First_name === "Karthik" && last_name === "Testing") && (status === "Assigned")){

        console.log("User submitted values are matching");
    }else{

        console.log("User submitted values are not matching");
    }

});

test.skip(`Edit a Lead`,async({page})=>{

    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.locator('#username').fill('Demosalesmanager');
    await page.locator('#password').fill('crmsfa');
    await page.locator('.decorativeSubmit').click();
    await page.locator('.crmsfa>a>img').click();

    await page.locator('.sectionTabBar>li').nth(1).click();
    await page.locator('ul.shortcuts>li').nth(2).click();
    await page.locator('input[name="id"]').fill('11833');
    await page.locator('#ext-gen334').click();
    await page.waitForTimeout(5000);
    await page.locator('.x-grid3-col-partyId>a').click();
    await page.locator('.frameSectionExtra>a').nth(2).click();
    await page.locator('#updateLeadForm_companyName').fill('TestLeaf_Updated');
    await page.locator('#updateLeadForm_departmentName').fill('Automation QA');
    await page.locator('#updateLeadForm_annualRevenue').fill('2000000');
    await page.locator('#updateLeadForm_description').fill('This is a Test description');
    await page.locator('input[value="Update"]').click();

    console.log(await page.title());

    let exp_company_name = (await page.locator('#viewLead_companyName_sp').textContent())?.replace(")","").split('(')[0];
    let exp_dept_name = await page.locator('#viewLead_departmentName_sp').textContent();
    let exp_annualIncome = (await page.locator('#viewLead_annualRevenue_sp').textContent())?.replace('$',"");
    let income = exp_annualIncome?.replaceAll(',',"").split('.')[0].trim();
    let exp_desc = (await page.locator('#viewLead_description_sp').textContent())?.trim();

    if(exp_company_name === 'TestLeaf_Updated' && exp_dept_name === 'Automation QA' && income === '2000000' && exp_desc === 'This is a Test description'){
    
                console.log('Values are Updated Properly');
}
else{

    console.log('Values are not updated as expected');

    console.log('Compmany Name -'+exp_company_name);
    console.log('Department Name -'+exp_dept_name);
    console.log('Annual Income -'+income);
    console.log('Description -'+exp_desc);

}
});

test(`Create an Account`,async({page})=>{

    await page.goto('https://login.salesforce.com/');
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com');
    await page.locator('#password').fill('TestLeaf@2025');
    await page.locator('#Login').click();

    console.log(await page.title());
    console.log(page.url());

    await page.locator('.slds-icon-waffle').click();
    await page.locator('button[aria-label="View All Applications"]').click();
    await sleep(5000);
    await page.locator('input[placeholder="Search apps or items..."]').pressSequentially('Service');    
    await page.locator('a.slds-text-heading_small p.slds-truncate').nth(0).click();
    await page.locator('a[title="Accounts"]').click();
    await page.locator('a[title="New"]').click();
    await page.locator('#input-764').fill('TestLeaf_08122025');
    await page.locator('button[name="SaveEdit"]').click();









});

function sleep(sleeptime: number | undefined) {
  return new Promise(resolve => setTimeout(resolve, sleeptime));
}