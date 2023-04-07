/* Write a program that asks for the names of six dogs.
The program prints dog names to unordered list <ul>
in reverse alphabetical order. (2p)
*/
"use strict"

let dogs = [];

for(let i=0; i<6; i++){
  dogs[i] = prompt("Enter name of " + (i+1).toString() + ". dog...");
}

dogs.sort();
dogs.reverse();

for(let i=0; i<6; i++){
  document.getElementById("dog_list").innerHTML += "<li>" + dogs[i] +"</li>";
}
