// debugger header
// "use strict"; //使用严格模式
function out(i){
    document.getElementById("txt").innerHTML=
    document.getElementById("txt").innerHTML+", "+i;
    return;
}

// -> List构造
var list = new Array();
list.push(1);
var a = list.shift();
out(a);