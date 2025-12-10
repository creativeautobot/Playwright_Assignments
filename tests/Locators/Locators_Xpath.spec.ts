import {test} from '@playwright/test'

test.skip(`Create a Lead`,async({page})=>{
    
    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.locator('//input[@id="username"]').fill('Demosalesmanager');
    await page.locator('//input[@id="password"]').fill('crmsfa');
    await page.locator('//input[@value="Login"]').click();
    await page.locator('//a[contains(@href,"/crmsfa/control")]/img').click();

    await page.locator('//a[text()="Create Lead"]').click();
    await page.locator('//input[@id="createLeadForm_companyName"]').fill('TestLeaf_Xpath');
    await page.locator('//input[@id="createLeadForm_firstName"]').fill('Karthik_Xpath');
    await page.locator('//input[@id="createLeadForm_lastName"]').fill('Testing_Xpath');
    await page.locator('//input[@name="personalTitle"]').fill('Mr');
    await page.locator('//input[@name="generalProfTitle"]').fill('Test Engineer_Xpath');
    await page.locator('//input[@name="annualRevenue"]').fill('200000');
    await page.locator('//input[@id="createLeadForm_departmentName"]').fill('QA_Xpath');
    await page.locator('//input[@id="createLeadForm_primaryPhoneNumber"]').fill('9879826544');
    await page.locator('//input[@value="Create Lead"]').click();
    let company_name = await page.locator('//span[@id="viewLead_companyName_sp"]').textContent();
    console.log(company_name);
    //company_name?.replace(')',"").split('(')[1];
    let LeadId = company_name?.replace(')',"").split('(')[1];;
    console.log(LeadId);
    let First_name = await page.locator('//span[@id="viewLead_firstName_sp"]').textContent(); 
    let last_name = await page.locator('//span[@id="viewLead_lastName_sp"]').textContent();
    let status = await page.locator('//span[@id="viewLead_statusId_sp"]').innerText();
 
    if((company_name?.includes('TestLeaf')) && (First_name === "Karthik" && last_name === "Testing") && (status === "Assigned")){

        console.log("User submitted values are matching");
    }else{

        console.log("User submitted values are not matching");
    }

});

test.skip(`Edit a Lead`,async({page})=>{

    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.locator('//input[@id="username"]').fill('Demosalesmanager');
    await page.locator('//input[@id="password"]').fill('crmsfa');
    await page.locator('//input[@value="Login"]').click();
    await page.locator('//a[contains(@href,"/crmsfa/control")]/img').click();

    await page.locator('//ul[@class="sectionTabBar"]/li[2]').click();
    await page.locator('//a[contains(@href,"/findLeads")]').click();
    await page.locator('//input[@name="id"]').fill('11833');
    await page.locator('//button[contains(text(),"Find Leads")]').click();
    await page.waitForTimeout(5000);
    await page.locator('//div[contains(@class,"x-grid3-col-partyId")]/a').click();
    await page.locator('//a[text()="Edit"]').click();
    await page.locator('//input[@id="updateLeadForm_companyName"]').fill('TestLeaf_Updated'); 
    await page.locator('//input[@id="updateLeadForm_departmentName"]').fill('Automation QA'); 
    await page.locator('//input[@id="updateLeadForm_annualRevenue"]').fill('2000000'); 
    await page.locator('//input[@id="updateLeadForm_description"]').fill('This is a Test description'); 
    await page.locator('//input[@value="Update"]').click();

    console.log(await page.title());

    let exp_company_name = (await page.locator('//span[@id="viewLead_companyName_sp"]').textContent())?.replace(")","").split('(')[0];
    let exp_dept_name = await page.locator('//span[@id="viewLead_departmentName_sp"]').textContent(); 
    let exp_annualIncome = (await page.locator('//span[@id="viewLead_annualRevenue_sp"]').textContent())?.replace('$',""); 
    let income = exp_annualIncome?.replaceAll(',',"").split('.')[0].trim();
    let exp_desc = (await page.locator('//span[@id="viewLead_description_sp"]').textContent())?.trim(); 

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

test.skip(`Create an Account`,async({page})=>{

    await page.locator('//input[@id="username"]').fill('Demosalesmanager');
    await page.locator('//input[@id="password"]').fill('crmsfa');
    await page.locator('//input[@value="Login"]').click();
    
    console.log(await page.title());
    console.log(page.url());

    await page.locator('.slds-icon-waffle').click();
    await page.locator('//button[@aria-label="View All Applications"]').click();
    await sleep(5000);
    await page.locator('//input[@placeholder="Search apps or items..."]').pressSequentially('Service');    
    await page.locator('a.slds-text-heading_small p.slds-truncate').nth(0).click();
    await page.locator('//a[@title="Accounts"]').click();
    await page.locator('//a[@title="New"]').click();
    await page.locator('#input-764').fill('TestLeaf_08122025');
    await page.locator('//button[@name="SaveEdit"]').click();


});

function sleep(sleeptime: number | undefined) {
  return new Promise(resolve => setTimeout(resolve, sleeptime));
}

test(`Drodowns handling`,async({page})=>{

    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.locator('//input[@id="username"]').fill('Demosalesmanager');
    await page.locator('//input[@id="password"]').fill('crmsfa');
    await page.locator('//input[@value="Login"]').click();
    await page.locator('//a[contains(@href,"/crmsfa/control")]/img').click();

    await page.locator('//a[text()="Create Lead"]').click();
    await page.selectOption('#createLeadForm_dataSourceId',{label:'Conference'});
    await page.selectOption('#createLeadForm_currencyUomId',{value:'INR'});
    await page.selectOption('#createLeadForm_marketingCampaignId',{value:'CATRQ_CARNDRIVER'});

    let marketing_dd = page.locator('#createLeadForm_marketingCampaignId>option');
    let campaign_count = await marketing_dd.count();

    for(let i=0;i<campaign_count;i++){

        console.log(await marketing_dd.nth(i).innerText());


    }

    await page.waitForTimeout(1000);

})