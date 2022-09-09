// debugger header
// "use strict"; //使用严格模式
var p = document.getElementById("txt"); // p标签
var t = p.childNodes[0]; // p中内容
function out(i){
    document.getElementById("txt").innerHTML=
    document.getElementById("txt").innerHTML+", "+i;
    return;
}
function Person(name, age){
    this.name = name;
    this.age = age;
}

// git -> 是否存在child.text
out(t.nodeType)