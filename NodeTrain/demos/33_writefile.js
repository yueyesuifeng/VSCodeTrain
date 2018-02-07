const fs = require('fs');
const content = Buffer.from('this is a test');
// fs.writeFile('./text', 'this is a test', { encoding: 'utf8' }, err => { //没有text这个文件，会创建这个text的文件
//     if (err) throw err;
//     console.log('done!');
// });
fs.writeFile('./text', content, err => { //没有text这个文件，会创建这个text的文件,写入Buffer，可以不传入编码方式
    if (err) throw err;
    console.log('done!');
});