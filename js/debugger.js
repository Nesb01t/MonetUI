// debugger header
// "use strict"; //使用严格模式
function out(i){
    document.getElementById("txt").innerHTML=
    document.getElementById("txt").innerHTML+", "+i;
    return;
}

// -> 上下取舍
out(Math.ceil(4.5));
out(Math.floor(4.5));
out(Math.round(4.5));