// debugger header
"use strict"; //使用严格模式
function out(i){
    document.getElementById("txt").innerHTML=i;
    return;
}

// -> 与undef
var x;
var a = true;
out(a && x);