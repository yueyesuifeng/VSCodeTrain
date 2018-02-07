const fs = require('fs'); //解决回调地狱的问题   一个异步调用另一个异步
const promisify = require('util').promisify; //
const read = promisify(fs.readFile);
read('./43_promisify.js').then(data => { //这里为什么报错?
    console.log(data.toString());
}).catch(ex => {
    console.log(ex);
});


async function test() { //这里是为什么错误呀？
    try {
        const content = await read('./43_promisify.js');
        console.log(content.toString());
    } catch (ex) {
        console.log(ex);
    }
}
test();