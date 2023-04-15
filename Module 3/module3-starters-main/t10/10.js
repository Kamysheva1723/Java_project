/*Open t10 folder in your IDE/editor. Read the first name and last name
values from the form and print them in the <p id="target"> (2p)
remember to stop the default action of the form
you can use attribute selectors in querySelector() to select the <input> elements
example output: Your name is Luke Skywalker*/

"use strict"
document.getElementById("source").addEventListener("submit", function(event){

  event.preventDefault()

  const user_firstname = document.querySelector('input[name="firstname"]').value;

  const user_secondname = document.querySelector('input[name="lastname"]').value;

  document.getElementById("target").textContent = "Your name is "
                                                           + user_firstname + " "
                                                           + user_secondname;

});