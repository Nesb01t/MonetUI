// debugger header
// "use strict"; //使用严格模式
function out(i){
    document.getElementById("txt").innerHTML=
    document.getElementById("txt").innerHTML+", "+i;
    return;
}

// -> String.replace
var a = "abcde"
var b = a.replace("a", "bbb");
out(b);