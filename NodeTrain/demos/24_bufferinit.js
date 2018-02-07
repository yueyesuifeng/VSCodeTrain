//Buffer 缓冲区   JavaScript语言自身只有字符串数据类型，没有二进制数据类型。但在处理像TCP流或文件流时，必须使用到二进制数据
//Buffer的使用率比较高，在项目中可以慢慢熟悉
console.log(Buffer.alloc(10)); //长度是10，用0填充
console.log(Buffer.alloc(20)); //长度是10，用0填充
console.log(Buffer.alloc(5, 1)); //长度是5，用1填充
console.log(Buffer.allocUnsafe(5)); //平常没必要使用，填充是随机的，不安全
console.log(Buffer.from([1, 2, 3])); //实例化这个数组
console.log(Buffer.from('test')); //实例化字符串，默认的编码方式是utf-8
console.log(Buffer.from('test', 'base64')); //指定编码方式base64
//Buffer用于处理二进制数据流，是全局变量
//实例类似整数数组，但大小固定
//C++代码在V8堆外分配物理内存