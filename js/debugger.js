// debugger header
// "use strict"; //使用严格模式
var p = document.getElementById("txt"); // p标签
var t = p.childNodes[0].nodeValue; // p中内容
function out(i){
    document.getElementById("txt").innerHTML=
    document.getElementById("txt").innerHTML+", "+i;
    return;
}
function Person(name, age){
    this.name = name;
    this.age = age;
}

// git -> 标签内容长度length
out(t.length);