/*Write a program that prompts the user for the start and end year.
The program prints all leap years from the interval given by the user.
Printing is done in an unordered list to the HTML document. (3p)*/

"use strict"

let yearStart = Number(prompt("Enter start year..."))
let yearEnd = Number(prompt("Enter end year..."))

if (yearStart && yearEnd) {
  for (let year = yearStart; year <= yearEnd; year++) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      document.querySelector("#yearList").innerHTML+="<li>" + year.toString() + "</li>"
    }
  }
}
else{
  document.querySelector('#yearList').innerHTML = "<li> Something wrong with your years... </li>";
  }
