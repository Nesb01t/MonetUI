// debugger header
// "use strict"; //使用严格模式
function out(i){
    document.getElementById("txt").innerHTML=
    document.getElementById("txt").innerHTML+", "+i;
    return;
}

// -> GetRuntime通过Date.now()
var start = Date.now() // 调用毫秒数
// do something
for (let i = 0; i < 1000000000; i++) {
    var x = i*i*i;
}
var interval = Date.now() - start
out(interval)