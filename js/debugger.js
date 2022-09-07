// debugger header
// "use strict"; //使用严格模式
function out(i){
    document.getElementById("txt").innerHTML=
    document.getElementById("txt").innerHTML+", "+i;
    return;
}

// -> 构造函数模式
function Person(name, age){
    this.name = name;
    this.age = age;
    this.sayName = function(){
        out(name);
    };
}
var a = new Person("卡比同学", 10);
a.sayName();