// debugger header
// "use strict"; //使用严格模式
function out(i){
    document.getElementById("txt").innerHTML=
    document.getElementById("txt").innerHTML+", "+i;
    return;
}

// -> 取函数对象名字
var sum = function(a, b){
    return a+b;
}
out(sum(1, 23));