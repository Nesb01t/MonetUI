// debugger header
"use strict"; //使用严格模式
function out(i){
    document.getElementById("txt").innerHTML=
    document.getElementById("txt").innerHTML+", "+i;
    return;
}

// -> switch
switch (1) {
    case 2:
        out(2);
        break;
    default:
        out(1);
        break;
}