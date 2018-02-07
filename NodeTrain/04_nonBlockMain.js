var fs = require("fs");

fs.readFile('input.txt', function(err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("程序执行结束!"); //不需等待文件读取完，这样就可以读取文件时同时执行接下来的代码，大大提高了程序的性能