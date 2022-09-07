// debugger header
// "use strict"; //使用严格模式
function out(i){
    document.getElementById("txt").innerHTML=
    document.getElementById("txt").innerHTML+", "+i;
    return;
}
function Person(name, age){
    this.name = name;
    this.age = age;
}

// -> resizeTo
out("高度"+window.innerHeight);
var h = window.innerHeight;
var ret = window.resizeTo(window.innerWidth*0.8, h*0.8);
out(ret);