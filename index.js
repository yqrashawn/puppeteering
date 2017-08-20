const puppeteer = require('puppeteer');
const path = require('path');
const test = require('./lib/test.js');
const log = require('./lib/output.js');

module.exports = {
  puppeteer,
  error: log.error,
  test,
};
