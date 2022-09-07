// debugger header
// "use strict"; //使用严格模式
function out(i){
    document.getElementById("txt").innerHTML=
    document.getElementById("txt").innerHTML+", "+i;
    return;
}

// -> apply给函数传参
var values = [1, 2, 3, 4, 5, 10];
var max = Math.max.apply(Math, values);
out(max);