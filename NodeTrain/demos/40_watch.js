const fs = require('fs');
fs.watch('./', { //监视文件的变化 watch可以watch任何内容    watchFile只是watch一个文件
    recursiv: true // 是否循环递归
}, (evenType, filenam) => {
    console.log(evenType, filenam);
});
//监视本地文件的变化，用这个做本地构建是比较方便的