// debugger header
"use strict"; //使用严格模式
function out(i){
    document.getElementById("txt").innerHTML=i;
    return;
}

// -> 单加号操作
var x = "0.01";
var y = +x;
out(y);