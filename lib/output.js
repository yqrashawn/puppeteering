const chalk = require('chalk');

let errorCount = 0;
let succCount = 0;

const error = (...args) => {
  console.log(chalk.orange.bgWhite.bold(`[${errorCount}]`), ...args);
  errorCount++;
};

const failed = (des, ...args) => {
  console.log(chalk.red.bgWhite.bold(`[${des} Failed]`), ...args);
};

const succ = (des, ...args) => {
  console.log(chalk.green.bgWhite.bold(`[[${succCount}] ${des} Successed]`), ...args);
  succCount++;
};

module.exports = {
  error,
  failed,
  succ,
};
