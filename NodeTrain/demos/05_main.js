const modA = require('./05_modA');
const modB = require('./05_modB');//其实在加载模块05_modA的时候，05_modB已经被加载了
console.log(modA.test);
console.log(modB.test);