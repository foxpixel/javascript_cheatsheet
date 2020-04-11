function btnonclick(){
    var str=document.getElementById("text1").value;
    var str1=document.getElementById("text2").value;
    if(str === str1){
        document.write("Authentication done");
    }
    else{
        document.write("check username or password");   
    }
}