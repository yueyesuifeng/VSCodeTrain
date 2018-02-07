console.log("%s", "hoge", "foo");
console.log("%s", "hoge", { foo: "FOO" });
console.log("%d", 10, 10.5);
console.log("%d", "hoge");
console.log("%%", "hoge");
var user = new Object();
user.name = "wnaghe";
user.getName = function() { return this.name };
user.setName = function(name) { this.name = name };
console.dir(user);
console.time('small loop'); //标记开始时间
for (var i = 0; i < 10000; i++) {
    i;
}
console.timeEnd('small loop'); //标记结束时间，输出的是开始时间到结束时间的经过的毫秒数
console.assert(1 == 22, "前面的表达式是false就输出这条信息");