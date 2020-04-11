function validate(){
    var username=document.getElementById("uname").value;
    var regx=/E00/i;                                          //here i removes case sensetivity like if the input is has expression e00 then also it returns true
    if(regx.test(username)){                                   //here .test will check the variable regx with variable username if it matches then it is true
        alert("valid username");
    }
    else{
        alert("invalid username");
        document.getElementById("lbluser").style.visibility="visible";
    }
}