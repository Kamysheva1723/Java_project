/*Write a program that asks the user for numbers until he gives zero.
The given numbers are printed in the console from the largest to the smallest.
(2p) */

"use strict"

let numbers = [];
let number_str;
let i = -1;

do {

  i++;

  do {
    number_str = prompt("Enter number (zero for end)...");
  } while ( Number(number_str) === NaN )

  numbers[i] = Number(number_str);

}while(  number_str !== "0" )

numbers.pop();  /*last was zero, so let's delete it*/
numbers.sort();
numbers.reverse();

numbers.forEach (item => {
  console.log(item);
})
