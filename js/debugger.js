// debugger header
"use strict"; //使用严格模式
function out(i){
    document.getElementById("txt").innerHTML=i;
    return;
}

// -> 解释从左向右执行
var num1 = 10;
var num2 = 5;
out("qwq"+num1+num2);