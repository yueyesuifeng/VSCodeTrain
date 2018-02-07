const EventEmitter = require('events'); //1.  加载模块
class CustomEvent extends EventEmitter { //2. 定义类

}
const ce = new CustomEvent(); //3. 实例化
ce.once('test', () => { //4. 用once的方法绑定事件处理程序，值调用一次
    console.log('test event');
});
setInterval(() => { //5. 隔500毫秒调用
    ce.emit('test');
}, 500);