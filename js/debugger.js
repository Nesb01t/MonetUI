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

// -> 函数能力检测
function isSortable(Obj){
    return typeof Obj.sort == "function";
}
var num = 19;
var list = [1, 3, 7, 4, 2];
out(isSortable(num))
out(isSortable(list))
