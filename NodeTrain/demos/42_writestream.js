const fs = require('fs');
const ws = fs.createWriteStream('./test.txt');
const tid = setInterval(() => {
    const num = parseInt(Math.random() * 10);
    console.log(num);
    if (num < 8) {
        ws.write(num + ''); //write只接受类型Buffer或者String
    } else {
        clearInterval(tid); //写完之后就清掉
        ws.end(); //触发finsh事件
    }
}, 200);
ws.on('finsh', () => { //写完之后会调用finsh事件
    console.log('done!');
});