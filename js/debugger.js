// debugger header
// "use strict"; //使用严格模式
function out(i){
    document.getElementById("txt").innerHTML=
    document.getElementById("txt").innerHTML+", "+i;
    return;
}

// -> 作用域链 scope chain
var color = "red";
out(color);
function color_change(){
    with(window){
        color = "blue";
    }
}
color_change();
out(color);