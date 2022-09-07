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

// -> forin对象
var p1 = new Person("卡比同学", 10);
for (const key in p1) {
    if (Object.hasOwnProperty.call(p1, key)) {
        const element = p1[key];
        out(element);
    }
}