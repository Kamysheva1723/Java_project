/*Write a program that rolls user defined number of dice and
displays the sum of the results of the dice rolls.(2p)
First, program asks the user for the number of dice rolls.
Then the program throws a die as many times as the user defined.
Print the sum of the results in the console or in the HTML document.*/

"use strict"
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let diceNumber = Number(prompt("How many dices should we take?"))

if (diceNumber && (diceNumber > 0)) {
    let sum = 0
    let n
    let screenString = "Dice rolls "
    while (diceNumber !== 0) {
        n = getRandomInt(1, 7)
        sum = sum + n
        screenString = screenString + n.toString() + ", "
        diceNumber--
    }
    document.querySelector('#rolls').innerHTML = screenString.substring(0,
      screenString.length - 2)
    document.querySelector('#sum').innerHTML = "Sum is: " + sum.toString()
}
else{
  document.querySelector('#rolls').innerHTML = "Something wrong with the entered number..."
}

