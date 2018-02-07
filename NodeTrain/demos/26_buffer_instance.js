/*
buf.length
buf.toString()
buf.fill()
buf.equals()
buf.indexOf()还有buf.lastIndexOf()
buf.copy()
实例的属性和方法
*/
const buf = Buffer.from('This is a test!');
console.log(buf.length); //Buffer的长度,这个Buffer本身占用的字节数

const buf2 = Buffer.allocUnsafe(10); //实际占用的空间是10
buf2[0] = 2;
console.log(buf2.length);

console.log(buf.toString('base64')); //可以传入编码方式,此时是乱码，将编码方式改为utf8，就不会乱码了

const buf3 = Buffer.allocUnsafe(10);
console.log(buf3);
console.log(buf3.fill(10, 2, 6)); //填充一些其他的值
const buf4 = Buffer.from('test');
const buf5 = Buffer.from('test');
const buf6 = Buffer.from('test!');

console.log(buf4.equals(buf5)); //判断两个Buffer的内容是不是一样
console.log(buf4.equals(buf6));

console.log(buf4.indexOf('es'));
console.log(buf4.indexOf('esa'));

const source = Buffer.allocUnsafe(26);
const target = Buffer.allocUnsafe(26).fill('!');

for (let i = 0; i < source.length; i++) {
    source[i] = i + 97;
}
source.copy(target, 4, 1, 4);
console.log(source.toString('ascii'));
console.log(source.toString('ascii'));