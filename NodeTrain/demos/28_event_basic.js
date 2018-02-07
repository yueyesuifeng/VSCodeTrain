const EventEmitter = require('events'); //1. 加载模块events
class CustomEvent extends EventEmitter {

}
const ce = new CustomEvent(); //2. 实例化
ce.on('test', () => { //3. 绑定事件   test事件，事件名，事件处理程序
    console.log('this is a test');
});
setInterval(() => { // 4.触发事件 500毫秒调用一次
    ce.emit('test');
}, 500);