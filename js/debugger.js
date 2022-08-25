// debugger header
"use strict"; //使用严格模式
function out(i){
    document.getElementById("txt").innerHTML=i;
    return;
}

// -> Int数值转换
var x = parseInt("123");
out(x);