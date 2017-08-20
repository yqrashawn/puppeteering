const puppeteer = require('puppeteer');
const path = require('path');
const test = require('./lib/test');
const log = require('./lib/output');
const config = require(path.join(process.cwd(), 'puppeteering.js'));

const testUrl = config.url;
const testPort = config.port;
const headless = config.headless;
const timeout = config.timeout;
const https = config.https ? 'https' : 'http';

async function run(beforeLoad, afterLoad) {
  const browser = await puppeteer.launch({ headless, });
  const page = await browser.newPage();
  page.on('pageerror', (...args) => {
    log.error(...args);
  });
  beforeLoad(browser, page);
  console.log('launching ', `${https}://${testUrl}:${testPort}`);
  await page.goto(`${https}://${testUrl}:${testPort}`, { waitUntil: 'networkidle' });
  afterLoad(browser, page);
  page.waitFor(timeout).then(() => {
    browser.close();
  });
}

module.export = {
  run,
  test,
};
