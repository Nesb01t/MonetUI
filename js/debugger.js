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

// -> firstChild和lastChild
var len = document.body.childNodes;
for (const key in len) {
    if (Object.hasOwnProperty.call(len, key)) {
        const element = len[key].childNodes;
        for (const x in element) {
            if (Object.hasOwnProperty.call(element, x)) {
                const f = element[x];
                out(f.nodeValue);
            }
        }
    }
}