/*Write a program that prompts the user for numbers.
When the user enters one of the numbers he previously entered,
the program will announce that the number has already been
given and stops its operation and then prints all the given numbers
to the console in ascending order. (2p)*/

"use strict"

let numbers = []
let i = 0;
let number_str;
let need_input = true;

do {

  do {
    number_str = prompt("Enter number...")
  } while (!Number(number_str))

  if (Number(number_str) in numbers){
    need_input = false;
    alert("Number " + number_str + " already in array.")
  }
  else {
    numbers[i] = Number(number_str)
    i++;
  }
} while (need_input)

numbers.sort(function (a,b){return a-b})

numbers.forEach(item => {console.log(item)})