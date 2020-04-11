function fn1(){
    var str = document.getElementById("rd1");
    var str1 = document.getElementById("rd1");

    if(str.checked==true){
        document.write("the selected channel : " +str.value);
    }
    else if(str1.checked==true){
        document.write("the selected channel : " +str1.value);
    }
    else{
        document.write(" pls select an option");
    }
}