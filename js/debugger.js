// debugger header
// "use strict"; //使用严格模式
var t = document.getElementById("txt");
function out(i){
    document.getElementById("txt").innerHTML=
    document.getElementById("txt").innerHTML+", "+i;
    return;
}
function Person(name, age){
    this.name = name;
    this.age = age;
}

// git -> spacial_attri
t.setAttribute("spacial_attri", 10);
out(t.getAttribute("spacial_attri"))