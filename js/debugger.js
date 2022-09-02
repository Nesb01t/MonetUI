// debugger header
// "use strict"; //使用严格模式
function out(i){
    document.getElementById("txt").innerHTML=
    document.getElementById("txt").innerHTML+", "+i;
    return;
}

// -> Date原理
var a = Date.parse("2021/2/21")
a = new Date(1234);
out(a);