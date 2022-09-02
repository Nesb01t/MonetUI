// debugger header
// "use strict"; //使用严格模式
function out(i){
    document.getElementById("txt").innerHTML=
    document.getElementById("txt").innerHTML+", "+i;
    return;
}

// -> arg对象的callee
function factorial(num){
    if (num==1) {
        return 1;
    } else {
        return num*arguments.callee(num-1);
    }
}
out(factorial(5));