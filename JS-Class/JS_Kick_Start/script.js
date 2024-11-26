console.log("BasiFy");

// var age = 23;
// alert("age = "+age);

let name = "Naim Ahammed";
console.log("name = " + name);

let num = "50";
console.log("num = " + num);

var num1 = 23;
var num1 = 24;
var num1 = 25;
console.log("num1 = " + num1);

let num2 = 40;
num2 = 41;
console.log("num2 = " + num2);

const num3 = 30;
console.log("num3 = " + num3);

// var text = "bangladesh";
// var length = text.length;
// console.log("bangladesh length = "+length);
// document.write("bangladesh length = "+length+'<br>');
// // alert("bangladesh length = "+length);

// var text = prompt("enter your name : ");
// console.log(" length = " + text.length);
// document.write("bangladesh length = " + length+'<br>');
// // alert("bangladesh length = "+length);

// var your_name = prompt("enter your name 2 : ");
// console.log(" length = " + your_name);
// document.write("bangladesh length = " + your_name +'<br>');
// // alert("bangladesh length = "+length);

var text = "Bangladesh";
document.write(text.charAt(2) + "<br>");
text = text.toUpperCase();
document.write(text + "<br>");
text = text.toLowerCase();
document.write(text + "<br>");

var text1 = "Bangladesh";
var text2 = " is a beautiful country";
var text3 = text1.concat(text2);
document.write(text3 + "<br>");

var text4 = "Bangladesh";
var text5 = text4.slice(0, 6);
document.write(text5 + "<br>");

var first_name = "Naim";
var last_name = " Ahammed";
var full_name = first_name.concat(last_name);
document.write("full_name = " + full_name + "<br>");

var full_name_length = full_name.length;
document.write("full_name_length = " + full_name_length + "<br>");

var full_name_uppercase = full_name.toUpperCase();
document.write("full_name_uppercase  = " + full_name_uppercase + "<br>");

var full_name_charat = full_name.charAt(1);
document.write("full_name_charat  = " + full_name_charat + "<br>");

var a = 20;
var b = 10;
if (a > b) {
  document.write("a big");
}
if (b < a) {
  document.write("b small" + "</br>" + "</br>");
}

document.write("</br>" + "</br>");

// anisul islam
// function
function print(print) {
  // var print = print;
  document.write(print + "</br>" + "</br>");
  document.write();
}
print(2 + " naim");

//
var number2 = 5;
var borgoSqure = number2 * number2;
document.write("result = " + borgoSqure + "</br>" + "</br>");

//
function number1() {
  var number2 = 5;
  var borgoSqure = number2 * number2;
  document.write("result = " + borgoSqure + "</br>" + "</br>");
}
number1();

//
function number3(number2) {
  var borgoSqure = number2 * number2;
  document.write("result = " + borgoSqure + "</br>" + "</br>");
}
number3(9);

//
function number4(number2, number4) {
  var borgoSqure = number2 * number4;
  document.write("result = " + borgoSqure + "</br>" + "</br>");
}
number4(5, 5);

//
function sqaure(number5, number6) {
  var result = number5 + number6;
  return result;
}
print("result = " + sqaure(2, 2));

//IIFES
(function number5(a, b) {
  // var a = 20;
  // var b = 30;
  var sum = a + b;
  document.write("IIFES sum = " + sum + "</br>" + "</br>");
})(20, 30);

const number6 = function number5(a, b) {
  // var a = 20;
  // var b = 30;
  var sum = a + b;
  document.write("IIFES var sum = " + sum + "<br> <br> <br>");
};
number6(20, 30);

//array

let array = [30, 40, 50, 10, 60, 20];
for (i = 0; i < 6; i++) {
  print("index " + i + " --- " + "value " + array[i]);
}
print("array length = " + array.length);
document.write("<br> <br> <br>");

///obj and for loop

let obj = {
  a: 1,
  b: 2,
  c: 3,
  name: "naim",
  email: "naim@gmail.com",
};
for (let i in obj) {
  print(i + ": " + obj[i]);
}

// for(let i=0; i<5; i++){
//    print(i+ " " + obj[i]);
// }

//rendom number game

var rendomNumberWin = 0;
var rendomNumberLoss = 0;

for (var i = 0; i <= 5; i++) {
  var rendomNumberInput = 5;

  // var rendomNumberInput = parseInt(prompt("play "));

  var rendomNumber = Math.floor(Math.random() * 5) + 1;

  if (rendomNumberInput == rendomNumber) {
    console.log("win " + rendomNumber);
    rendomNumberWin++;
  } else {
    console.log("loss " + rendomNumber);
    rendomNumberLoss++;
  }
}

document.write("win " + rendomNumberWin);
document.write("<br> <br> <br>");
document.write(" Loss " + rendomNumberLoss);

//DOM
var changeText = document.getElementById("lorem5")
changeText.innerHTML = "naim";
// document.getElementById



// one click
function btnChange(){
   document.write('naim');
}

// image change
var imgChangeDC =   document.querySelector("#img");
function imgChange(){
  imgChangeDC.src = "birthday-invite.png";
}

//how to add css in javascript
document.querySelector("").classList.add("CSS_Peoperty_Name");

