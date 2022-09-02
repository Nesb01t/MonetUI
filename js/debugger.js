// debugger header
// "use strict"; //使用严格模式
function out(i){
    document.getElementById("txt").innerHTML=
    document.getElementById("txt").innerHTML+", "+i;
    return;
}

// -> 函数声明和表达式初始化(2)
out(a(1));
var a = function(x){
    return x+1;
}