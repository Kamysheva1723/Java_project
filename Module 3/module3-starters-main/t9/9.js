/*Open t9 folder in your IDE/editor. This is continuation to previous task.
There is only one text field left, where the user writes the calculation
(addition, subtraction, multiplication or division) (4p)
You can use the includes and split methods.
eval() function is prohibited
No need to support decimal numbers, calculating integers is enough.
Example inputs: 3+5, 2-78, 3/6, etc..*/

"use strict"

let result = 0;

document.getElementById("start").addEventListener("click", Calculation);


function Calculation() {

 let numbers = [];
 const user_string = document.getElementById("calculation").value;

 if (user_string.includes("+")){
  numbers = user_string.split("+");
  result = parseInt(numbers[0]) + parseInt(numbers[1]);
 }

 if (user_string.includes("-")){
  numbers = user_string.split("-");
  result = parseInt(numbers[0]) - parseInt(numbers[1]);
 }

 if (user_string.includes("/")){
  numbers = user_string.split("/");
  result = parseInt(numbers[0]) / parseInt(numbers[1]);
 }

 if (user_string.includes("*")){
  numbers = user_string.split("*");
  result = parseInt(numbers[0]) * parseInt(numbers[1]);
 }

 document.getElementById("result").textContent = result.toString();
}