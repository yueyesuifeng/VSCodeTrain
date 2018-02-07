//sream 流 有方向的数据
const fs = require('fs');
const rs = fs.createReadStream('./41_readstream.js'); //创建一个流
rs.pipe(process.stdout); //pipe往谁里面导    stdout代表控制台