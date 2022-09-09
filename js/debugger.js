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

// git -> 获取标签中的#text
var x = document.getElementById("txt");
var t = x.childNodes[0];
out(t.nodeValue);