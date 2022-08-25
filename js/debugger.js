// debugger header
"use strict"; //使用严格模式

// -> 变量类型
// var message = "hi";
// alert(message);

// -> 变量初始化
// var undef;
// alert(typeof undef+"\n当坚持做到变量声明时都初始化， 则typeof undef=未声明");

// -> null类型
var x = null;
alert(typeof x+"\nnull用于obj类型初始化");
if (x != null){
    alert("x对象已有内容!");
}