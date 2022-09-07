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

// -> 不同实例调用同一成员函数
function say(){
    out("yes");
}
function cast(){
    this.say = say;
}
var c1 = new cast();
var c2 = new cast();
out(c1.say == c2.say);