/*Open t2 folder in your IDE/editor. Add HTML by using createElement() ???
and appenChild mehtods. (2p)
Add the following HTML code to the element with id="target"
<li>First item</li>
<li>Second item</li>
<li>Third item</li>
Add class my-item to the second list item*/

  const target = document.getElementById("target")

  const l1 = document.createElement("li");
  const firstContent = document.createTextNode("First item");
  const l2 = document.createElement("li");
  const secondContent = document.createTextNode("Second item");
  const l3 = document.createElement("li");
  const thirdContent = document.createTextNode("Third item");

  l1.appendChild(firstContent);
  l2.appendChild(secondContent);
  l3.appendChild(thirdContent);

  target.appendChild(l1);
  target.appendChild(l2);
  target.appendChild(l3);

  l2.classList.add("my-item");
