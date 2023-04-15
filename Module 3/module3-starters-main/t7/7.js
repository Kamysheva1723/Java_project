/*Open t7 folder in your IDE/editor. Make a hover effect with JavaScript. (2p)
when user mouses over <p id="trigger"> change the picture of <img id="target">
form picA.jpg to picB.jpg
when user mouses off, change the picture back to original*/

"use strict"

const my_trigger = document.getElementById("trigger");
const my_img = document.getElementById("target")
my_trigger.addEventListener('mouseover', function(){
  my_img.src = "img/picB.jpg";
  })

my_trigger.addEventListener('mouseout', function(){
  my_img.src = "img/picA.jpg";
  })
