/*Open t8 folder in your IDE/editor. Make a simple calculator. (4p)
There are two input fields where user enters numbers. Based on the drop-down
list, calculator performs addition, subtraction, multiplication or division
of these two numbers.
Use the value attribute of <option> elements to decide which operation
the calculator needs to do. Example.
Show the result in <p id="result"> when the button is clicked.*/

"use strict"

let result = 0;

const my_button = document.getElementById("start")
my_button.addEventListener("click", Calculation);


function Calculation() {
 const num1 = parseFloat(document.getElementById("num1").value);
 const num2 = parseFloat(document.getElementById("num2").value);
 const operation = document.getElementById("operation").value;

 if (operation === "add") {
  result = num1 + num2;
 }
 if (operation === "sub") {
  result = num1 - num2;
 }
 if (operation === "multi") {
  result = num1 * num2;
 }
 if (operation === "div") {
  result = num1 / num2;
 }
 document.getElementById("result").textContent = result.toString();
}