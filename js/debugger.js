// debugger header
// "use strict"; //使用严格模式
function out(i){
    document.getElementById("txt").innerHTML=
    document.getElementById("txt").innerHTML+", "+i;
    return;
}

// -> 无块级作用域
for (var i = 0; i < 10; i++) {
    // do nothing
}
out(i);