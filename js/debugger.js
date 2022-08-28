// debugger header
"use strict"; //使用严格模式
function out(i){
    document.getElementById("txt").innerHTML=i;
    return;
}

// -> ===的情况下
out([null === undefined,
    NaN !== NaN,
    "5" === 5])