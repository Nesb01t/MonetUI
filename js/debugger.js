// debugger header
// "use strict"; //使用严格模式
function out(i){
    document.getElementById("txt").innerHTML=
    document.getElementById("txt").innerHTML+", "+i;
    return;
}

// -> 一般函数用作创建对象
function add(x, y){
    return x,y;
}

var x = new add(1, 2);
var y = add(1, 2);
out(x);
out(y);