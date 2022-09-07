// debugger header
// "use strict"; //使用严格模式
function out(i){
    document.getElementById("txt").innerHTML=
    document.getElementById("txt").innerHTML+", "+i;
    return;
}

// -> 工厂模式
function createPerson(name, age){
    var p = new Object;
    p.name = name;
    p.age = age;
    p.sayName = function(){
        out(this.name);
    }
    return p;
}
var p = createPerson("卡比同学", 10);
p.sayName();