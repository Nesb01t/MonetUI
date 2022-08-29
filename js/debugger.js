// debugger header
// "use strict"; //使用严格模式
function out(i){
    document.getElementById("txt").innerHTML=
    document.getElementById("txt").innerHTML+", "+i;
    return;
}

// -> 函数中临时变量访问
function add(i){
    num = i+1;
    return num;
}
add(3);
add(3);
out(num);