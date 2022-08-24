// link of code learning
// 
// js字符串方法 https://www.runoob.com/js/js-strings.html
// git提交规范 https://www.jianshu.com/p/752edeae4855
// js类(class) https://www.runoob.com/js/js-class-intro.html
function test(){
    document.getElementById("txt").innerHTML=Date();
    setTimeout(test, 1000)
}
setTimeout(test, 1000)

var test_json = {"site":[
    {"name":"player", "url":"www.baidu.com"},
    {"name":"player2", "url":"www.baidu.com"},
]}