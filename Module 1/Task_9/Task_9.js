/*Write a program that asks the user for an integer and tells if the number
is a prime number. (2p)
Prime numbers are numbers that are only divisible by 1 and itself.
For example, number 13 is a prime number as it can only be divided by 1 or 13
so that the result is an integer.
On the other hand, number 21 for example is not a prime number
as it can be also be divided by numbers 3 and 7.
Print the result on the HTML document.
*/
"use strict"

let stringN = prompt("Enter a positive integer number...")
let N = Number(stringN)
if (N && (N === Math.floor(N)) && (N > 0)) {
  let d = 1
  do {
    d++;
  } while (N % d !== 0)
  if (d === N) {
    document.querySelector("#result").innerHTML = N.toString() + " is a prime number"
  } else {
    document.querySelector("#result").innerHTML = N.toString() + " is not a prime number"
  }
}
else {
  document.querySelector("#result").innerHTML = stringN + " is not a positive integer number"
}