/* Write a program that prompts the user for five numbers and prints them
in the reverse order they were entered. Print the result to the console.(2p)
Save the numbers to an array, then use for-loop to iterate in reverse order.
Do not use array.reverse() function.
*/
"use strict"

let numbers=[];
for (let i=1;i<=5;i++){
  let number_str = prompt("Enter "+i.toString()+". number...");
  if ( Number(number_str) || number_str==="0") {
    numbers[i-1] = Number(number_str);
  }
  else{
    i--;
    alert(number_str + " is not a number, try again...");
  }
}
for (let i=0; i<5; i++){
  document.getElementById("list").innerHTML += "<li>" + numbers[i] + "</li>";
}
for (let i=4;i>=0;i--){
  document.getElementById("reversed_list").innerHTML += "<li>" + numbers[i] + "</li>";
  console.log(numbers[i]);
}