const{ test , expect } = require('@playwright/test');

test('page title', async () => {


  const browser = await chromium.launch();

  const context = await browser.newContext();

  const page = await context.newPage();



  await page.goto('https://testautomationpractice.blogspot.com/');

  await expect(page).toHaveTitle('Test Automation Practice Blog - Playwright Tutorial');




})