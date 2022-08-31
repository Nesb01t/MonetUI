// debugger header
// "use strict"; //使用严格模式
function out(i){
    document.getElementById("txt").innerHTML=
    document.getElementById("txt").innerHTML+", "+i;
    return;
}

// -> lastIndexOf
var a = [1, 2, 3, 4, 5, 3];
out(a.indexOf(3));
out(a.lastIndexOf(3));