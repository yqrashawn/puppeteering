const path = require('path');
const log = require('./output');
const config = require(path.join(process.cwd(), 'puppeteering.js'));

const cbtimeout = config.cbtimeout ? config.cbtimeout : 3000;

const test = (des, cb) => {
  let done = false;
  if (!des.length) console.error('invalid description');
  this.des = des;
  const thisTimeout = setTimeout(() => {
    log.failed(des);
  }, cbtimeout);
  cb(() => {
    clearTimeout(thisTimeout);
    log.succ(this.des);
    done = true;
  });
  if (!done) log.succ(this.des);
};

module.exports = test;
