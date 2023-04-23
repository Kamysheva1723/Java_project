/*Develop the app further.
Add JavaScript that gets the value entered to the form and sends a request
with fetch to https://api.tvmaze.com/search/shows?q=${value_from_input}.
Print the search result to the console. (3p)*/

'use strict'

const show_form = document.querySelector('#tv');
show_form.addEventListener('submit', async function (evt) {
  evt.preventDefault();
  try {
    const response = await fetch(
      "https://api.tvmaze.com/search/shows?q="
            + document.querySelector('input[name=q]').value
    );
    const jsonData = await response.json();
    console.log(jsonData);
    } catch (error) {
    console.log(error.message);
  }
})
