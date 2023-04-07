/*Write a function that returns a random dice roll between 1 and 6.
The function should not have any parameters. Write a main program that
rolls the dice until the result is 6. The main program should print
out the result of each roll in an unordered list (<ul>). (2p) */

"use strict"

function dice(){
  return Math.floor(Math.random()*6.0 + 1);
}

let dice_roll;

do{
  dice_roll = dice();
  document.getElementById("rolls").innerHTML += "<li>" + dice_roll.toString() + "</li>"
}while (dice_roll !== 6)
