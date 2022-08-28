// debugger header
"use strict"; //使用严格模式
function out(i){
    document.getElementById("txt").innerHTML=
    document.getElementById("txt").innerHTML+", "+i;
    return;
}

// -> for-in
var a = [10, 3, 6];
for (var x in a){
    out([x, a[x]]);
}