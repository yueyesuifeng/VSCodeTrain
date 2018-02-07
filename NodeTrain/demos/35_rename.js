const fs = require('fs');
fs.rename('./text', 'test.txt', err => { //修改文件的名字，原来的文件名   要修改的文件名  回调函数
    if (err) throw err;
    console.log('done!');
});