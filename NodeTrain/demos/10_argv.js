const { argv, argv0, execArgv, execPath } = process; //这种写法是什么意思，各个参数是什么意思？process是什么？process是进程，这是es6的语法
argv.forEach(item => {
    console.log(item);
});
console.log(argv0);
console.log(execArgv);
console.log(execPath);
//process.argv 返回一个数组，这个数组包含了启动Node.js进程时的命令行参数。常用,可以传入指定的参数
//process.argv0属性，保存Node.js启动时传入的argv[0]参数值的一份只读副本。不常用
//process.execArgv 属性返回当Node.js进程被启动时，Node.js特定的命令行选项。
//process.execPath 属性，返回启动Node.js进程的可执行文件所在的绝对路径。