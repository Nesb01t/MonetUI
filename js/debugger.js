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

// git -> createElement&appenChild
var h = document.createElement("h1");
h.id = "myNewh1";
h.className = "box";
document.body.appendChild(h)