// debugger header
// "use strict"; //使用严格模式
function out(i){
    document.getElementById("txt").innerHTML=
    document.getElementById("txt").innerHTML+", "+i;
    return;
}

// -> js参数数组
function arg_out(i){
    for (const x in arguments) {
        out(arguments[x]);
    }
}
arg_out(1, "qwq", 3)