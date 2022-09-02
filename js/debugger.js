// debugger header
// "use strict"; //使用严格模式
function out(i){
    document.getElementById("txt").innerHTML=
    document.getElementById("txt").innerHTML+", "+i;
    return;
}

// -> 递归函数中耦合情况
function factorial(num){
    if (num==1) {
        return 1;
    } else {
        return num*factorial(num-1);
    }
}
out(factorial(5));