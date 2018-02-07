/**
 * Buffer.byteLength
 * Buffer.isBuffer()
 * Buffer.concat()
 * 这些方法不用实例化就可以使用的方法，在某些语言中成为静态方法
 */
console.log(Buffer.byteLength('test')); //一个字符串实际占用了几个字节
console.log(Buffer.byteLength('测试')); //中文，结果显示一个汉字占3个字节，不同的语言汉字占用的字节不同
console.log(Buffer.isBuffer({})); //判断一个对象是不是Buffer
console.log(Buffer.isBuffer(Buffer.from([1, 2, 3])));
const buf1 = Buffer.from('This ');
const buf2 = Buffer.from('is ');
const buf3 = Buffer.from('a ');
const buf4 = Buffer.from('test ');
const buf5 = Buffer.from('! ');
const buf = Buffer.concat([buf1, buf2, buf3, buf4, buf5]); //拼接Buffer，传入的参数是Buffer的数组
console.log(buf.toString()); //Buffer转化成字符串 toString()