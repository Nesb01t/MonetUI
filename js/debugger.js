// debugger header
// "use strict"; //使用严格模式
function out(i){
    document.getElementById("txt").innerHTML=
    document.getElementById("txt").innerHTML+", "+i;
    return;
}

// -> String.trim
var a = "  12312 qweq q11 3     ";
a.trim();
out(a);