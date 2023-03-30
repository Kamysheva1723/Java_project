/*
Make a program that asks the user for the number of dice and the sum of the
eye numbers of interest to the user. The purpose of your program is now
to find out with what probability the number of dice given by the user
produces the sum of the number of eyes given by the user. For example,
if the user enters 3 as the number of dice and 17 as the sum of the eyes,
the program calculates the probability that the sum of the three dice's eye
numbers is 17. (5p)
Solve the problem by simulating: Have the program roll a given number
of dice in a for-loop (e.g. 10,000 times) and calculate what proportion
 of the repetitions produced the sum of eye numbers of interest to the user.
Print the result on the HTML document:
Probability to get sum 7 with 2 dice is 15.64%
you can limit the number of decimals with toFixed()
test values:
2 dice, sum 7, probability is about 15-17%
3 dice, sum 15, probability is about 5%
 */

'use strict';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let diceNumberStr = prompt('How many dices should we take?');
let diceNumber = Number(diceNumberStr);
let userSumStr = prompt('What sum is in your interests?');
let userSum = Number(userSumStr);

if ((diceNumber.toString() === diceNumberStr) &&
    (userSum.toString() === userSumStr) &&
    (diceNumber === Math.floor(diceNumber)) &&
    (userSum === Math.floor(userSum)) &&
    (userSum * diceNumber > 0)) {

  let eventCounter = 0;
  for (let i = 1; i <= 10000; i++) {
    let sum = 0;
    for (let j = 1; j <= diceNumber; j++) {
      sum += getRandomInt(1, 7);
    }
    if (sum === userSum) {
      eventCounter++;
    }
  }
  let P = (eventCounter / 10000.0 * 100.0).toFixed(4);
  document.querySelector('#result').innerHTML = diceNumberStr +
      ' dices, sum ' + userSumStr + ' - probability is about ' + P.toString() +
      '% ';
} else {
  document.querySelector(
      '#result').innerHTML = 'Something wrong with your numbers...';
}