const { basename, dirname, extname } = require('path');
const filePath = '/usr/local/bin/no.txt';
console.log(basename(filePath));
console.log(dirname(filePath));
console.log(extname(filePath));
//path.basename()方法返回一个path的最后一个部分，就是文件名+文件扩展名
//path.dirname()方法返回一个path的目录名
//path.extname()方法返回path的扩展名即从path的最后一部分中的最后一个.字符到字符串结束