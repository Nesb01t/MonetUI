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

// -> 获取key值NodeValue
var len = document.body.childNodes;
var p = len[3].childNodes;
for (const x in p) {
    if (Object.hasOwnProperty.call(p, x)) {
        const element = p[x];
        out(element.nodeValue);
    }
}