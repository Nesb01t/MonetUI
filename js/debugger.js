// debugger header
// "use strict"; //使用严格模式
function out(i){
    document.getElementById("txt").innerHTML=
    document.getElementById("txt").innerHTML+", "+i;
    return;
}

// -> 自下而上地查找变量
var color = "RED";
function getColor(){
    return color;
}
out(getColor());