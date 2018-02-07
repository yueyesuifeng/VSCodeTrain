//移除事件
const EventEmitter = require('events');
class CustomEvent extends EventEmitter {}

function fn1() {
    console.log('fn1');
}

function fn2() {
    console.log('fn2');
}
const ce = new CustomEvent();
ce.on('test', fn1); //一个事件可以绑定多个事件处理程序，这里test的事件绑定了fn1 fn2两个事件处理程序
ce.on('test', fn2);
setInterval(() => {
    ce.emit('test');
}, 500);
setTimeout(() => {
    // ce.removeListener('test', fn2);//移除一个事件的，某一个事件处理程序
    // ce.removeListener('test', fn1);
    ce.removeAllListeners('test'); //通过事件名，移除整个事件的处理程序
}, 1500);