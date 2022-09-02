// debugger header
// "use strict"; //使用严格模式
function out(i){
    document.getElementById("txt").innerHTML=
    document.getElementById("txt").innerHTML+", "+i;
    return;
}

// -> Date.UTC
var a = Date.UTC(2021, 1, 10);
var b = new Date(a);
out(b);