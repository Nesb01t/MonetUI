// debugger header
// "use strict"; //使用严格模式
function out(i){
    document.getElementById("txt").innerHTML=
    document.getElementById("txt").innerHTML+", "+i;
    return;
}

// -> delete property
var person = {
    "name": "nicholas"
};
delete person.name;
out(person.name);