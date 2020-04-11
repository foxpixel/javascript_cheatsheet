function validate(){
    var uname = document.getElementById("uname");
    var pass = document.getElementById("pass");

    if(uname.value.trim()==""){
        alert("enter user name");
        return false;
    }
    else if(pass.value.trim()==""){
        alert("enter password");
        return false;
    }
    else if(pass.value.trim().length<5){
        alert("password too small");
        return false;
    }
    else{
        return true;
    }
}