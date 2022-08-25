// debugger header
"use strict"; //使用严格模式

// -> 变量类型
// var message = "hi";
// alert(message);

// -> 变量初始化
// var undef;
// alert(typeof undef+"\n当坚持做到变量声明时都初始化， 则typeof undef=未声明");

// -> null类型
// var x = null;
// alert(typeof x+"\nnull用于obj类型初始化");
// if (x != null){
//     alert("x对象已有内容!");
// }

// -> 转换成Boolean时发生的事情(可以类推)
// if("abc"){
//     alert("有内容");
// } else {
//     alert("NOTHING HERE");
// }

// -> 不同进制的数字/浏览器内存最大值
// var x = 10+0x1c;
// var x = Number.MAX_VALUE;
// alert(x);

// -> 妙用NaN
alert(null==undefined);
alert(NaN==NaN);
alert("NaN和NaN并不相等");