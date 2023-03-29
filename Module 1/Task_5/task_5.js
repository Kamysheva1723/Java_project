/*Write a program that asks the user to enter a year and notifies
the user whether the input year is a leap year. A year is a leap year
if it is divisible by four. However, years divisible by 100 are leap years
only if they are also divisible by 400.
Print the result on the HTML document. (3p)*/

let year = +prompt("Enter a year...")

if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)){
document.querySelector("#target").innerHTML = year.toString() + " is a leap year."
}
else{
document.querySelector("#target").innerHTML = year.toString() + " is not a leap year."
}
