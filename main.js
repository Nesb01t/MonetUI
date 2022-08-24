function myOut(i){ // 调试输出
    if (i==0) {
        window.alert("alert!");
    } else if (i==1) {
        document.write("doc.write!");
    } else if (i==2) {
        console.log("log out!");
    }
}

var personOut = {
    firstname:"John",
    age:50,

    out:function(){
        alert("yes");
        return this.firstname;
    }
}