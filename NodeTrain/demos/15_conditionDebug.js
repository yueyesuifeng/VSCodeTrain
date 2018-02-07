//添加调试断点的时候，右键点击可以添加条件断点
function test(n) {
    //复杂代码
    console.log(n);
}
for (let i = 0; i < 100; i++) {
    const n = parseInt(Math.random() * 10);
    test(n);
}