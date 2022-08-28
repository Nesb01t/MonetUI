// debugger header
// "use strict"; //使用严格模式
function out(i){
    document.getElementById("txt").innerHTML=
    document.getElementById("txt").innerHTML+", "+i;
    return;
}

// -> 引用类型-对象
var person = new Object();
person.name = "Nicholas";
out(person.name);