function validate() {
    var username = document.getElementById("uname");
    var password = document.getElementById("pass");

    if(username.value =="" || password.value == "" ){
        alert("pls type password and username");
        return false;
    }
    else{
        return true;
    }
}