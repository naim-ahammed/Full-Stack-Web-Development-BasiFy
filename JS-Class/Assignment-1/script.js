/*
** Assignment 1 **

1️⃣ 
Write a program to:
Declare two variables a and b with values 10 and 5.
Perform addition, subtraction, multiplication, and division on them.
Display the result of each operation in the console.

2️⃣ 
Create a program that converts a temperature from Celsius to Fahrenheit.
Formula: Fahrenheit = (Celsius * 9/5) + 32
Declare a variable for Celsius, store any value, and print the Fahrenheit equivalent.

3️⃣ 
Write a program that:
Takes a number as input (you can hardcode it or use prompt()).
Checks whether the number is positive, negative, or zero using if-else statements.
Display the result in the console.

4️⃣ 
Write a program to calculate grades based on marks:
If marks are 90 or above, print "A".
If marks are between 80 and 89, print "B".
If marks are between 70 and 79, print "C".
If marks are between 60 and 69, print "D".
If marks are below 60, print "F".

5️⃣ 
Write a program that:
Declares a variable and assigns it a number.
Checks whether the number is even or odd using the modulus operator %.
Print "Even" if the number is divisible by 2, otherwise print "Odd".
*/


//1️⃣ 
var a = 10;
var b = 5;

var addition = a + b;
document.write("addition = " + addition + "</br>");
console.log("addition = " + addition);


var subtraction = a - b;
document.write("subtraction = " + subtraction + "</br>");
console.log("subtraction = " + subtraction);


var multiplication = a * b;
document.write("multiplication = " + multiplication + "</br>");
console.log("multiplication = " + multiplication);


var division = a / b;
document.write("division = " + division + "</br> </br>");
console.log("division = " + division);
//1️⃣ 


//2️⃣ 
var Celsius = 35;
var Fahrenheit = (Celsius * 9 / 5) + 32;
document.write("Fahrenheit = " + Fahrenheit + "</br> </br>");
console.log("Fahrenheit = " + Fahrenheit);
//2️⃣


//3️⃣
var number = parseInt(prompt("Enter any number"));

if (number > 0) {
    document.write("the number is positive = " + number + "</br> </br>");
    console.log("the number is positive = " + number);
}
else if (number < 0) {
    document.write("the number is negative = " + number + "</br> </br>");
    console.log("the number is negative = " + number);
}
else {
    document.write("the number is zero = " + number + "</br> </br>");
    console.log("the number is zero = " + number);
}
//3️⃣


//4️⃣
// var marks = 55;
var marks = parseInt(prompt("Enter your marks"));

if(marks>=90){
document.write("grades = A, marks = " + marks + "</br> </br>");
console.log("grades = A, marks = " + marks);
}
else if(marks>=80 || marks>=89){
    document.write("grades = B, marks = " + marks + "</br> </br>");
    console.log("grades = B, marks = " + marks);
}
else if(marks>=70 || marks>=79){
    document.write("grades = C, marks = " + marks + "</br> </br>");
    console.log("grades = C, marks = " + marks);
}
else if(marks<=60){
    document.write("grades = D, marks = " + marks + "</br> </br>");
    console.log("grades = D, marks = " + marks);
}
//4️⃣


//5️⃣
// var num = 5;
var num = parseInt(prompt("Enter your number cheak even or odd"));

if(num%2==0){
    document.write("even, number is = " + num + "</br> </br>");
    console.log("even, number is = " + num);
}
else{
    document.write("odd, number is = " + num + "</br> </br>");
    console.log("odd, number is = " + num);
}
//5️⃣