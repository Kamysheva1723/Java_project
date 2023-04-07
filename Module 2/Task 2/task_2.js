/*Write a program that asks the user for the number of participants.
After this, the program asks for the names of all participants.
Finally, the program prints the names of the participants on the web page
in an ordered list (<ol>) in alphabetical order. (2p) */

"use strict"

let number_str;

do {
  number_str = prompt("Enter number of participants...");
} while( !Number(number_str))

let number = Number(number_str);
let names = [];

for (let i = 0; i < number; i++){
  names[i]=prompt("Enter name of " + (i+1).toString() + " participant...");
}

names.sort();

for (let i = 0; i < number; i++){
  document.getElementById("participants_list").innerHTML += "<li>" + names[i] + "</li>"
}
