// debugger header
// "use strict"; //使用严格模式
function out(i){
    document.getElementById("txt").innerHTML=
    document.getElementById("txt").innerHTML+", "+i;
    return;
}

// -> Array长度构造
var color = ['nicholas', 'qwq'];
out(color.join(undefined));