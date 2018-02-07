//一般的全局对象有CommonJS
//Buffer、process、console
//timer
const testVar = 1000;
global.testVar2 = 200; //希望全局访问的可以放在global中,调用后，可以直接通过变量名访问
module.exports.testVar = testVar;