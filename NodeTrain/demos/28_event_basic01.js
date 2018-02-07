var events = require('events');
var eventEmitter = new events.EventEmitter();
//监听器 #1  监听器可以理解为事件发生时，事件处理函数
var listener1 = function listener1() {
    console.log('监听器listener 1执行');
};
//监听器 #2
var listener2 = function listener2() {
    console.log('监听器 listener2 执行');
};
//绑定connection事件，处理函数为listener1 
eventEmitter.addListener('connection', listener1);
//绑定connection事件，处理函数为listener2
eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + "个监听器监听连接事件");
//处理connection事件
eventEmitter.emit('connection');
//移除绑定的listener1函数
eventEmitter.removeListener('connection', listener1);
console.log('listener1 不再监听');
//触发连接事件
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + "个监听器监听连接事件");
console.log("程序执行完毕!");