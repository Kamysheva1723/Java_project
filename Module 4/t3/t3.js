/*Develop the app even further. Print the following information for all series
 from the search result on the web page. (7p)
required information: Name, link to details (url), medium image and summary
show the name in <h2> element
show the url in <a> element. Also add target="_blank" to the link.
show the medium image with <img src="" alt="">.
Add medium image to src attribute and name property to alt attribute.
some TV-shows don't have images. This will cause an error.
You can fix this by adding ? operator to image property.
Example: tvShow.show.image?.medium;. This is called optional chaining.
show summary in <div> element (not <p>).
This is because the summary is already in <p> element, and the result
will not be valid if <p> is inside another <p>.
collect the elements to <article> elements and append <article> elements
to the HTML document.
make <div id="results"> element to the HTML document
where you append the <article> elements.
clear the old results with innerHTML = '' before you append the new results.*/

"use strict"

function output_on_page(data){

  const result_div = document.getElementById("result");
  result_div.innerHTML = "";
  const result_article = document.createElement("article");
  result_div.appendChild(result_article);



  for (let i=0; i<data.length; i++){

    const tag_list = [];

    const tag_name = document.createElement('h2');
    tag_name.textContent = (data[i].show.name);
    tag_list.push(tag_name);

    const tag_link = document.createElement("a");
    tag_link.href = data[i].show.url;
    tag_link.target = "_blank";
    tag_link.innerText = "Link to " + data[i].show.name;
    tag_list.push(tag_link);

    const tag_image = document.createElement("img");
    tag_image.src = data[i].show.image?.medium;
    tag_image.alt = "";
    tag_image.margine = 8;
    tag_list.push(tag_image);


    const tag_sum = document.createElement("div");
    tag_sum.innerHTML = data[i].show.summary;
    tag_list.push(tag_sum);

    for (let i=0; i < tag_list.length; i++){
      result_article.appendChild(document.createElement("br"));
      result_article.appendChild(tag_list[i]);
      result_article.appendChild(document.createElement("br"));
    }
  }
}

const show_form = document.querySelector('#tv');
show_form.addEventListener('submit', async function (evt) {
  evt.preventDefault();
  try {
    const response = await fetch(
      "https://api.tvmaze.com/search/shows?q="
            + document.querySelector('input[name=q]').value
    );
    const jsonData = await response.json();
    output_on_page (jsonData);
    } catch (error) {
    console.log(error.message);
  }
})


