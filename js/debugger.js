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

// -> 简单原型语法
function Man(){
}
Man.prototype = {
    name: "卡比同学",
    age: 20,
    sayName: function(){
        out(this.name);
    }
}
var m = new Man();
m.sayName()