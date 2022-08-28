// debugger header
"use strict"; //使用严格模式
function out(i){
    document.getElementById("txt").innerHTML=
    document.getElementById("txt").innerHTML+", "+i;
    return;
}

// -> 利用with重写out
function new_out(i){
    with(document){
        getElementById("txt").innerHTML=
        getElementById("txt").innerHTML+", "+i;
    }
    
    return;
}