// debugger header
// "use strict"; //使用严格模式
function out(i){
    document.getElementById("txt").innerHTML=
    document.getElementById("txt").innerHTML+", "+i;
    return;
}

// -> 对象字面量
var person = {
    name : "Nicholas",
    age : 29
};

out(person);
out(person.name);