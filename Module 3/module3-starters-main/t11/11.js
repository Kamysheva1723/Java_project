/*Continue task 5. Folder t11 already exists. Follow the instructions
in t11.txt. Modify the program to open large image in a modal when
<article> is clicked. (6p)
kick yourself at this point if you used innerHTML to create the <article> and its content.
add the following html code between </div> and </body> manually to the HTML-document (no JS)
<dialog>
   <span>&#x2715;</span>
   <img>
</dialog>
picArray has two images for each item: medium and large. Medium is used in the <img> inside the <article> and large is used in the <img> inside the <dialog>.
use showModal() and close() functions to show and hide <dialog>
the same time you are opening the modal, you should put the large image to the <img> in the modal.
Don't forget to add alt attribute.
use <span> inside <dialog> to close the modal.
*/
'use strict';
const picArray = [
  {
    title: 'Title 1',
    caption: 'Caption 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
    image: {
      large: 'img/pic1.jpg',
      medium: 'thumbnails/pic1.jpg',
    },
  },
  {
    title: 'Title 2',
    caption: 'Caption 2',
    description:
      'Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ',
    image: {
      large: 'img/pic2.jpg',
      medium: 'thumbnails/pic2.jpg',
    },
  },
  {
    title: 'Title 3',
    caption: 'Caption 3',
    description:
      'Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ',
    image: {
      large: 'img/pic3.jpg',
      medium: 'thumbnails/pic3.jpg',
    },
  },
  {
    title: 'Title 4',
    caption: 'Caption 4',
    description:
      'Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    image: {
      large: 'img/pic4.jpg',
      medium: 'thumbnails/pic4.jpg',
    },
  },
  {
    title: 'Title 5',
    caption: 'Caption 5',
    description:
      'Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. ',
    image: {
      large: 'img/pic5.jpg',
      medium: 'thumbnails/pic5.jpg',
    },
  },
  {
    title: 'Title 6',
    caption: 'Caption 6',
    description:
      'Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh.',
    image: {
      large: 'img/pic6.jpg',
      medium: 'thumbnails/pic6.jpg',
    },
  },
  {
    title: 'Title 7',
    caption: 'Caption 7',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
    image: {
      large: 'img/pic7.jpg',
      medium: 'thumbnails/pic7.jpg',
    },
  },
  {
    title: 'Title 8',
    caption: 'Caption 8',
    description:
      'Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. ',
    image: {
      large: 'img/pic8.jpg',
      medium: 'thumbnails/pic8.jpg',
    },
  },
  {
    title: 'Title 9',
    caption: 'Caption 9',
    description:
      'Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. ',
    image: {
      large: 'img/pic9.jpg',
      medium: 'thumbnails/pic9.jpg',
    },
  },
];

// add your code here

const my_article = document.createElement('article');
my_article.className = "card";

for (let i=0; i < picArray.length; i++){

  const my_head = document.createElement("h2");
  my_head.textContent = picArray[i].title;
  my_article.appendChild(my_head);

  const my_figure = document.createElement("figure");
  my_article.appendChild(my_figure);

  const my_figcaption = document.createElement('figcaption');
  my_figcaption.innerText = picArray[i].caption;
  my_article.appendChild(my_figcaption);

  const my_img = document.createElement("img");
  my_img.src =  picArray[i].image.medium;
  my_img.alt = picArray[i].title;
  my_figure.appendChild(my_img);

  const my_p = document.createElement("p")
  my_p.innerText = picArray[i].description
  my_article.appendChild(my_p);
  }

const my_section = document.getElementById("pictures");
my_section.appendChild(my_article);


const dialog = document.querySelector("dialog");
const all_images = document.querySelectorAll("img");

for (let i=0; i < all_images.length; i++) {
  all_images[i].addEventListener("click", show_dialog);
}

dialog.querySelector("img").removeEventListener("click",show_dialog);
function show_dialog(){

  dialog.querySelector("img").src = "img/" + this.src.split("/").pop();
  dialog.querySelector("img").alt =  this.alt;
  dialog.showModal();
  console.log(this);

}

document.querySelector("span").addEventListener("click",close_dialog);

function close_dialog(){
  dialog.close();
}




