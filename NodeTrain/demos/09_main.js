const mod = require('./09_global.js');
console.log(testVar2); //这里的报错，是因为
console.log(mod.testVar);
console.log(mod.testVar2); //访问不到
console.log(global.testVar2); //可以访问