console.log('This is a module');//第一次被加载的时候会被执行，加载之后会缓存
const testVar =100;
function test(){
    console.log(testVar);
}
module.exports.testVar=testVar;
module.exports.testFn=test;