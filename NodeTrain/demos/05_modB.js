module.exports.test = 'B';
const modA = require('./05_modA');
console.log('modB:',modA.test);//A，一旦出现某个模块被循环加载，就只输出已经执行的部分，还未执行的部分不会输出
module.exports.test = 'BB';