const EventEmitter = require('events'); //1. 加载模块
class CustomeEvent extends EventEmitter { //2. 定义类

}
const ce = new CustomeEvent(); //3. 实例化
ce.on('error', (err, time) => { //传给触发事件参数,可以传多个参数  4. 事件处理程序
    console.log(err);
    console.log(time); //时间戳
});
ce.emit('error', new Error('oops!'), Date.now());