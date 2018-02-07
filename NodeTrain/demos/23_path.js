const path = require('path');
const mod = require('./02_cusmod');
console.log(mod.testVar);
console.log('__dirname    ', __dirname);
console.log('__filename   ', __dirname);
console.log('process.cwd()', process.cwd());
console.log('./           ', path.resolve('./'));
//__dirname、__filename总是返回文件的绝对路径,执行文件所在的路径
//process.cwd()总是返回执行node命令所在文件夹，当前执行node脚本时，控制台上的路径，在哪开始执行的node脚本，进程在哪启动
// ./在require方法中总是相对于当前文件所在文件夹
// ./在其它地方和process.cwd()一样，相对于node启动文件
//在learnNode文件夹下可以这样运行  这个文件   node demos/23_path.js