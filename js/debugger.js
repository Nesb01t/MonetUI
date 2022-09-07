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

// -> clearTimeout和time_id
var time_id = setTimeout(out, 10, 10);
// clearTimeout(time_id);
out(time_id)