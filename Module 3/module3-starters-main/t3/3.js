/*Open t3 folder in your IDE/editor. Add HTML by using innerHTML property. (2p)
Add the following HTML code to the element with id="target". Add the values
from 'names' array to the <li> elements in a for-loop.
<li>John</li>
<li>Paul</li>
<li>Jones</li>*/

'use strict';
const names = ['John', 'Paul', 'Jones'];

const target = document.getElementById("target");

for (let i = 0; i < names.length; i++){
 target.innerHTML += "<li>" + names[i] + "</li>";
}
