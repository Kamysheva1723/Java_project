/*Develop the app further (4p).
Now add a form where you can enter a search term like in assignments 1-3
Send the search term to
https://api.chucknorris.io/jokes/search?query=${value_from_input} using fetch()
Print each joke in this format:
<article>
    <p>Joke here<p>
</article>*/

"use strict"

function output_jokes(jokes){

  const result_div = document.getElementById("result");
  result_div.innerHTML = "";

  const result_article = document.createElement("article");
  result_div.appendChild(result_article);

  for (let i=0; i< jokes.result.length; i++){

    const tag_p = document.createElement('p');
    tag_p.textContent = (jokes.result[i].value);
    result_article.appendChild(tag_p);

    }
  if (!jokes.result.length) {
    const tag_p = document.createElement('p');
    tag_p.textContent = ("No jokes about this...");
    result_article.appendChild(tag_p);
  }
  }

const term_form = document.getElementById("term")

term_form.addEventListener('submit', async function (evt) {
  evt.preventDefault();
  try {
      const response = await fetch(
          "https://api.chucknorris.io/jokes/search?query=" + term_form[name="q"].value);
      const jsonData = await response.json();
      output_jokes(jsonData);
   } catch (error) {
      console.log(error.message);
   }
})

