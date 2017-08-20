const log = require('./output');

const test = (des, timeout, cb) => {
  let d = false;
  if (!des.length) console.error('invalid description');
  this.des = des;
  this.thisTimeout = setTimeout(() => {
    log.failed(des);
  }, timeout);
  cb(() => {
    clearTimeout(this.thisTimeout);
    log.succ(this.des);
    d = true;
  });
  if (!d) log.succ(this.des);
};

module.exports = test;
