// debugger header
// "use strict"; //使用严格模式
function out(i){
    document.getElementById("txt").innerHTML=
    document.getElementById("txt").innerHTML+", "+i;
    return;
}

// -> 通过call扩充作用域(this)v1
color = 1;
function getColor(){
    return this.color;
}
var o = {
    color: "a"
}
out(getColor.call(o));