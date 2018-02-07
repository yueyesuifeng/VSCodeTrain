module.exports.test = 'A';//这种模块之间循环调用应该被避免，不要使用,避免A调用B，B又调用A
const modB = require('./05_modB');
console.log('modA:',modB.test);
module.exports.test = 'AA';