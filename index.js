require('dotenv').config();
const puppeteer = require('puppeteer');

const PASSWORD = process.env.PASSWORD;
const BOXADRESS= process.env.BOXADDRESS;

(async () => {

  const browser = await puppeteer.launch({ headless: "new",     args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();

  await page.goto(`${BOXADRESS}`);

  await page.type('#Password', PASSWORD);

  await page.click('#LoginButton');
  
  await setTimeout(() => {
  page.goto(`${BOXADRESS}/?device_reboot&mid=ReloadAndReboot`);
}, "5000");

await setTimeout(() => {

  page.click('.BtnReboot');

setTimeout(() => {

   page.click('#enableRestartBtn');
   
   }, "5000");
   
   setTimeout(() => {

   browser.close();
   console.log("Succesfully rebooted");
   
      }, "15000");
  
  }, "20000");
})();
