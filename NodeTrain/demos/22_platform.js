const {
    sep,
    delimiter,
    win32,
    posix,
} = require('path');
console.log('sep:', sep);
console.log('posix sep', posix.sep);
console.log('win sep', win32.sep);
console.log('PATH', process.env.PATH);
console.log('delimer', delimiter);
console.log('win delimiter', win32.delimiter);
console.log('posix delimiter', posix.delimiter);
//path.sep 提供了平台特定的路径片段分隔符
//path.delimiter 提供平台特定的路径分隔符
//path.win32 属性提供了 path 方法针对 Windows 的实现。
//path.posix 属性提供了 path 方法针对 POSIX 的实现。
//POSIX表示可移植操作系统接口（Portable Operating System Interface of UNIX，缩写为 POSIX ）