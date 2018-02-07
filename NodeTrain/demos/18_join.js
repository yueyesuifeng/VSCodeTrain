const { join } = require('path');
console.log(join('/usr', '/local/', '/bin/'));
console.log(join('/usr', '../local', 'bin/'));
//path.join()方法使用平台特定的分隔符把全部给定的path片段连接到一起，并规范化生成的路径     就是拼接  也会调用normalize