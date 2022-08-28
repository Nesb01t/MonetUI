// debugger header
"use strict"; //使用严格模式
function out(i){
    document.getElementById("txt").innerHTML=i;
    return;
}

// -> 特殊的相等和不等
out([null == undefined,
    NaN != NaN,
    "5" == 5])