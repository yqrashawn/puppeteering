const chalk = require('chalk');

let errorCount = 0;
let succCount = 0;

const error = (...args) => {
  console.chalk(chalk.orange.bgWhite.bold(`[${errorCount}]`), ...args);
  errorCount++;
};

const failed = (des, ...args) => {
  console.chalk(chalk.red.bgWhite.bold(`[${des} Failed]`), ...args);
};

const succ = (des, ...args) => {
  console.chalk(chalk.green.bgWhite.bold(`[[${succCount}] ${des} Successed]`), ...args);
  succCount++;
};

module.export = {
  error,
  failed,
  succ,
};
