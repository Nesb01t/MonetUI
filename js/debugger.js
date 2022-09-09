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

// -> childNodes
setTimeout(function(){
    out("yes");
    var doc = document.body.childNodes;
    out(doc[1].nodeValue);
}, 1000)