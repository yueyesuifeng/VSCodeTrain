var events = require('events'); //引入events模块
var eventEmitter = new events.EventEmitter(); //创建eventEmitter对象
var connectHandler = function connected() { //创建时间处理程序
    console.log('连接成功');
    eventEmitter.emit('data_received'); //触发data_reveived事件
};
eventEmitter.on('connection', connectHandler); //绑定connection事件处理程序
eventEmitter.on('data_received', function() { //使用匿名函数绑定data_received事件
    console.log('数据接收成功');
});
eventEmitter.emit('connection');
console.log("程序执行完毕！");