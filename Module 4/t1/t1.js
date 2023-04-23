'use strict';

// When the form is submitted...
const showForm = document.querySelector('#show_form')
showForm.addEventListener('submit', async function(evt) {
    // ... prevent the default action.
    evt.preventDefault();
    // get value of input element
    const show_name = document.querySelector('input[name]').value;
    try {                                               // error handling: try/catch/finally
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${show_name}`);    // starting data download, fetch returns a promise which contains an object of type 'response'
        const jsonData = await response.json();          // retrieving the data retrieved from the response object using the json() function
        console.log(jsonData);    // log the result to the console
    } catch (error) {
        console.log(error.message);
    }
});