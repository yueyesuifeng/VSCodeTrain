//多种调试方法，可以查看node的英文官网  DOCS Inspector
//使用Chrome DevTools 原生的方式
//1 chrome://inspect  
// node --inspect -debug-brk 14_debug.js  这个还是有点复杂的
//使用IDE的方式调节是比较方便地，方法就看这个课程就可以了，讲的比较明白
function test1() {
    const a = parseInt(Math.random() * 10);
    const b = parseInt(Math.random() * 10);
    const c = test2(a, b);
    console.log(c);
}

function test2(a, b) {
    if (a > b) {
        a += a * 2;
    } else {
        b -= a;
    }
    return a + b;
}
test1();