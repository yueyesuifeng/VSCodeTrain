const fs = require('fs');
//stat和文件信息有关的
fs.stat('./34_stat.js', (err, stats) => {
    if (err) { //这个报错，一般就是文件不存在，可以用这个方法判断文件是不是存在
        console.log('文件不存在');
        return;
    }
    console.log(stats.isFile()); //是文件么?
    console.log(stats.isDirectory()); //是文件夹么?
    console.log(stats); //打印这个对象，可以看这个对象的所有属性
});