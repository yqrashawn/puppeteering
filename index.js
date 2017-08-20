const test = require('./lib/test.js');
const log = require('./lib/output.js');

module.exports = {
  error: log.error,
  test,
};
