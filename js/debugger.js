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

// git -> 完整带标签的createElement
var x = document.createElement("<h1>yes</h1>");
document.body.appendChild(x);