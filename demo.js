// document.write("<h1>end of f***king world</h1>");


// var num=16;
// var name="Mohit Reddy";
// var flag=false;

// alert(name);
// document.write(num);


// CONDITIONAL OPERTAOR/TERNARY OPERATOR
var age=120;
var voteable = (age<18)?"too young":"<h1>fine</h1>";

document.write(voteable);

// var fname="Mohit";
// var lname="Reddy";
// var name=fname+" "+lname;

// document.write(name);

//1. Even or Odd

// var num=3;

// if(num%2==0){
//     document.write("Even Number");
// }
// else{
//     document.write("Odd no.");
// }


//2. +ve,-ve or the number is 0

// var num =0;

// if(num>0){
//     document.write("+ve no");
// }
// else if(num<0){
//     document.write("-ve no");
// }
// else{
//     document.write("it is 0");
// }

//3.  positive even number

// var num=4;

// if(num<0){
//     document.write("-ve no.");
// }
// else{
//     if(num%2==0){
//         document.write("even no");
//     }
//     else{
//         document.write("odd no");
//     }
// }

//===================switch========= 


//1. enter a numerber and get a weekday

// var day=5;

// switch(day){
//     case 1:document.write("mon");
//     break;
//     case 2:document.write("tue");
//     break;
//     case 3:document.write("wed");
//     break;
//     case 4:document.write("thurs");
//     break;
//     case 5:document.write("fri");
//     break;
//     case 6:document.write("sat");
//     break;
//     case 7:document.write("sun");
//     break;
//     default :document.write("enter a valid no.");
//     break;
// }

// ===========for loop==========

// 1.Print the table of 5

// for(var i=1;i<=10;i++){
//     var pro=5*i;
//     document.write(pro);
//     document.write("<br>");
// }

// 2. print first 5 even nos

// for(var i=0;i<10;i++){
//     if(i%2==0){
//         document.write(i);
//         document.write("<br>");
//     }
//     else{
//         continue;
//     }
// }

//3. pattern printing

// for(var i=1;i<=5;i++){
//     for(var j=1;j<=i;j++){
//         document.write("*");
        
//     }
//     document.write("<br>");
// }


//============while loop============

// var i=1;
// while (i<10) {
//     document.write(i+"<br>");
//     i+=2;
    
// }


// ======function==========

// function addNum() {
//     var a=2;
//     var b=2;
//     var c=a+b;
//     document.write(c);
// }

// addNum();

// function addNum(a,b) {
//     var c=a+b;
//     document.write(c+"<br>");
// }

// addNum(3,4);
// addNum("mohit"," reddy");


// function addNum(a,b) {
//     var c=a+b;
//     return c;
// }

// var op= addNum(5,3);
// document.write(op);


// =========objects============

// var car={
//     brand:"Tesla",
//     model:"Model1",
//     price:10000,
//     teslaautopilot:function () {                           //here the variable teslaautopilot is a method
//         document.write("This is an autodriving car");
//         return "This is an autodriving car"
//     }
// }

// document.write(car.brand+"<br>");
// document.write(car.teslaautopilot()); //this when we use return in function
// car.teslaautopilot();    //this is when we directly print using document.write  


// ===========contructor==========


// function cars(brand,model,price) {
//     this.brand=brand;
//     this.model=model;
//     this.price=price;
//     this.teslaAutopilot =function () {
//         document.write("this an autodrive car");
//     }
// }

// var c1= new cars("tesla","model1",10000);    //while giving parameters while calling we use new cars i.e function name
// var c1= new cars("bmw","model2",10000); 
// c1.teslaAutopilot();
// document.write("<br>"+c1.model);

// ====================dom manipulations===========================

// function buttonOnclick(){
//     document.getElementById("heading2").innerHTML="you are totally fine";
//     // alert("Button is clicked");
// }