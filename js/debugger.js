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

// -> 原型模式prototype
Person.prototype.sayName = function(){
    out(this.name);
};
var p1 = new Person("卡比同学", 100);
var x = p1.hasOwnProperty("name");
out(x);