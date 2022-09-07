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

<<<<<<< HEAD
// -> confirm
var a = confirm("yes")
out(a)
=======
// -> clearTimeout和time_id
var time_id = setTimeout(out, 10, 10);
// clearTimeout(time_id);
out(time_id)
>>>>>>> 898d67c1ecbfc949e943e42f8630a8d5a58c8a35
