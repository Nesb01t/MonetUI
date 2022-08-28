// debugger header
"use strict"; //使用严格模式
function out(i){
    document.getElementById("txt").innerHTML=
    document.getElementById("txt").innerHTML+", "+i;
    return;
}

// -> label破坏外层循环
label: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        out(i+""+j);
        if (j==1){
            break label;
        }
    }
}