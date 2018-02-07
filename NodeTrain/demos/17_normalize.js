const { normalize } = require('path'); //ES6的写法
// const normalize = require('path').normalize; //相当于
console.log(normalize('/usr//local//bin'));
console.log(normalize('/usr//local'));
//path.normalize()规范化给定的path,并解析'..'和'.'片段
//把路径做一些简单的处理，标准化   不太规范的路径变成规范的路径