const fs = require('fs'); //采用这种方式，使用node自带的模块
fs.readFile('./06_fs.js', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        // console.log(data);//直接打印data的话，是字符的16进制表示
        console.log(data.toString()); //使用toString
    }
});