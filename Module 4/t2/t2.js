'use strict';

// nettiin lähetettävän hakulauseen alkuosa (vakio)
const hakuAlku = "https://api.tvmaze.com/search/shows?q="

// etsitään html-sivun form-elementti
const tvForm = document.querySelector('#tv');

// asetetaan lomakkeelle tapahtumankuuntelija
tvForm.addEventListener('submit', async function (evt) {
  // estetään lomakkeen oletustoiminta (action)
  evt.preventDefault();
  // etsitään lomakkeelta käyttäjän antama syöte
  const hakuArvo = document.querySelector('input[name=q]').value;
  // muodostetaan lopullinen nettiin lähetettävä hakukysely
  const hakuLause = hakuAlku + hakuArvo
  console.log("-- Hakulause: " + hakuLause)

  // Tehdään ajax-tyyppinen datan haku, hyödynnetään Fetch APIa.
  // Käytetään asynkronisia funktioita ja promise-tekniikkaa.
  try {
    // error handling: try/catch/finally
    const response = await fetch(
      hakuLause
    ); // starting data download, fetch returns a promise which contains an object of type 'response'
    const jsonData = await response.json(); // retrieving the data retrieved from the response object using the json() function
    console.log(jsonData); // log the result to the console
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
});