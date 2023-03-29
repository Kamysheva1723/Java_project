/*Write a program that prompts for three integers. The program prints the sum,
product and average of the numbers to the HTML document. (3p)
remember to convert strings to numbers when adding */
'use strict';
let n1 = parseFloat(prompt("Input first number..."))
let n2 = parseFloat(prompt("Input second number..."))
let n3 = parseFloat(prompt("Input third number..."))


let sum = n1 + n2 + n3
let product = n1 * n2 * n3
let average = sum/3.0

average = average.toFixed(2)

document.querySelector('#sum_p').innerHTML = sum.toString();
document.querySelector('#product_p').innerHTML = product.toString();
document.querySelector('#average_p').innerHTML = average.toString();

