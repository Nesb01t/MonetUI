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

// -> document.all
var aldoc = document.all
for (const key in aldoc) {
    if (Object.hasOwnProperty.call(aldoc, key)) {
        const element = aldoc[key];
        out(element)
    }
}