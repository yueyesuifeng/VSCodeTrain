setImmediate(() => { //定时器,和时间无关，当前事件队列执行完了之后，就执行这一个，下一个队列的队首，这个常用
    console.log('setImmediate');
});
setTimeout(() => { //中间，他们两个之间
    console.log('timeout');
}, 0);
process.nextTick(() => { //和setImmediate很像，但是比setImmediate执行的早,最快，当前队列的最后 
    console.log('nextTick');
    process.nextTick(() => {
        console.log('nextTick');
    });
});
//process.nextTick()方法将 callback 添加到"next tick 队列"。 一旦当前事件轮询队列
//的任务全部完成，在next tick队列中的所有callbacks会被依次调用。这里面涉及很重要的概念，就是事件队列和事件循环