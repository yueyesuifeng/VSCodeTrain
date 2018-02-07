//中文乱码问题
const StringDecoder = require('string_decoder').StringDecoder; //内置的包
const decoder = new StringDecoder('utf8');
const buf = Buffer.from('中文字符串！');
for (let i = 0; i < buf.length; i++) {
    const b = Buffer.allocUnsafe(5);
    buf.copy(b, 0, i);
    console.log(b.toString());
}
for (let i = 0; i < buf.length; i += 5) {
    const b = Buffer.allocUnsafe(5);
    buf.copy(b, 0, i);
    console.log(decoder.write(b));
}