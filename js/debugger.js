// debugger header
// "use strict"; //使用严格模式
function out(i){
    document.getElementById("txt").innerHTML=
    document.getElementById("txt").innerHTML+", "+i;
    return;
}

// -> 函数参数和外部引用了同一对象的情况
var person = new Object();
person.health = 100;
function add_health(i){
    if (toString(i)=="[object Undefined]"){
        i.health += 100;
    }
}
add_health(person);
out(person.health);