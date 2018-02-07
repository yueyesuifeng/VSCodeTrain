const fs = require('fs');
fs.readFile('./32_readfile.js', 'utf8', (err, data) => { //读文件  第一参数:路径 第二参数:encode的格式  第三部分是事件处理程序：回调函数的第一个参数都会保留给异常
    if (err) throw err;
    console.log(data);
});
const data = fs.readFileSync('./01_run.js', 'utf8'); //同步操作，没有回调,这个要快，上面的异步操作交个IO了，要比这个慢，但这个会阻塞进程，不符合Node异步处理的思想，推荐的异步写法
console.log(data);