const chalk = require('chalk');

let errorCount = 0;
let succCount = 0;

const error = (...args) => {
  console.log(chalk.black.bgYellow(`[${errorCount}]`), ...args);
  errorCount++;
};

const failed = (des, ...args) => {
  console.log(chalk.white.bgRed(`[${des} Failed]`), ...args);
};

const succ = (des, ...args) => {
  console.log(chalk.black.bgGreen(`[[${succCount}] ${des} Successed]`), ...args);
  succCount++;
};

module.exports = {
  error,
  failed,
  succ,
};
