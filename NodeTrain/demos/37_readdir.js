const fs = require('fs');
fs.readdir('../', (err, files) => { //读文件加的操作  files所有文件的文件名  是一个字符串数
    if (err) throw err;
    console.log(files);
});