/*Write a program that prompts the user for numbers.
When the user enters one of the numbers he previously entered,
the program will announce that the number has already been
given and stops its operation and then prints all the given numbers
to the console in ascending order. (2p)*/

"use strict"

let number_str;
let number;
let numbers = [];
let i = 0;
let need_input = true;


do {

  do {
    number_str = prompt("Enter number...");
  } while ( ! Number(number_str))

  console.log("it was a number " + number_str)

  number = Number(number_str)

  if (numbers.includes(number)){
    need_input = false;
    alert("Number " + number_str + " already in array.");
  }
  else {
    numbers[i] = number;
    i++;
  }
} while (need_input)

numbers.sort(function (a,b){return a-b});

numbers.forEach(item => {console.log(item)});