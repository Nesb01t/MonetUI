// debugger header
// "use strict"; //使用严格模式
function out(i){
    document.getElementById("txt").innerHTML=
    document.getElementById("txt").innerHTML+", "+i;
    return;
}

// -> reverse
var a = [1, 2, 3, 4, 5];
var b = a.slice(1, 4);
out(b);