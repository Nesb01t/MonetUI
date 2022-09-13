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

// -> document的子对象->DocumentType和HtmlElement
var value = document.nodeValue;
out(value);

var sub = document.childNodes;
out(sub[1])