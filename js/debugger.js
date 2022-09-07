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

// -> 块级语句
function output(){
    for(var i=0; i < 10; i++){
        out(i);
    }
    var i;
    out(i);
}
output()