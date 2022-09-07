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
var p1 = new Person("nicholas", 10);
var p2 = new Person("卡比同学", 100);
p1.sayName();
p2.sayName();