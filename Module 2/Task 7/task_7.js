/*Modify the function above so that it gets the number of sides on the dice
as a parameter. With the modified function you can for example roll
a 21-sided role-playing dice. The difference to the last exercise is that
the dice rolling in the main program continues until the program gets
the maximum number on the dice, which is asked from the user at the beginning. (2p)*/

"use strict"
function dice(max_number){
  return Math.floor(Math.random() * max_number + 1); /*max+1-1=max*/
}

let dice_roll;
let side_number_str;
let side_number;

do{
  side_number_str = prompt("Enter number of sides of the dice...");
}while( ! Number(side_number_str) || Number(side_number_str) < 1)

side_number = Math.floor(Number(side_number_str));

do{
  dice_roll = dice(side_number);
  document.getElementById("rolls").innerHTML += "<li>" + dice_roll.toString() + "</li>"
}while (dice_roll !== side_number)