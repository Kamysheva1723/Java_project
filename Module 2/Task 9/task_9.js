/*Write a function called even(), which receives an array containing
numbers as a parameter. The function returns a second (usually smaller)
array which has the even numbers of the original array.
The function must not make changes to the original table. (3p)
Example: In a three-item array, there are items 2, 7 and 4.
The function returns a two-item array with items 2 and 4.
Print both the original array and the new array to the console
in the main program after you have called the function.
You can hardcode the array, no need for prompt().*/

"use strict"

let original_array = [1,2,4,56,23,21,23,5467,0,0.8,-2,-125,-160]
 function even(original_list){
  let result_list = [];
  original_list.forEach(num => {
    if (num % 2 === 0){
      result_list.push(num)
    }
  })
   return result_list;
 }

 console.log("Original list:")
original_array.forEach(item => {
  console.log(item)
})

console.log("Even list:")
even(original_array).forEach(item => {
  console.log(item)
})