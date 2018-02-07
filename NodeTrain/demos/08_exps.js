//exports和module.exports有什么区别？
// const exports = module.exports;//exports默认是module.exports的快捷方式，可以往里面添加属性，但是不能修改它的指向，修改了它的指向，那和普通的对象就没有什么区别了
// exports1.test=100;
// exports.test = 100;
module.exports = {
    a: 1,
    b: 2,
    test: 100
};