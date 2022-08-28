// debugger header
"use strict"; //使用严格模式
function out(i){
    document.getElementById("txt").innerHTML=i;
    return;
}

// -> 无符号的右移操作符
var x = -8;
out(x>>>1);