var http = require('http'); //引用http模块
var server = http.createServer(); //创建http服务器赋值给变量server
server.on('request', function(req, res) { //为server服务器在接受到客户端请求时，触发的request事件绑定事件处理函数
    console.log(req.url);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
});
server.listen(1337, "127.0.0.1");