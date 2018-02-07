const { parse, format } = require('path');
const filePath = '/usr/local/node_modules/n/pakage.json';
const ret = parse(filePath);
console.log(ret);
console.log(format(ret));
//path.parse() 方法返回一个对象，对象的属性表示 path 的元素。  简单的Fenix路径。    修改部分属性时，比较方便
// path.format() 方法会从一个对象返回一个路径字符串。