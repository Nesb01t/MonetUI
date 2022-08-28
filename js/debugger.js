// debugger header
"use strict"; //使用严格模式
function out(i){
    document.getElementById("txt").innerHTML=i;
    return;
}

// -> 左移操作符
var x = 4;
out(x<<1);