"use strict";
list = document.getElementById("to-do-list");
function newTask(event) {
  let li = document.createElement("li");
  li.className ="task";
  let inputValue = document.getElementById("input").value;
  li.innerHTML = ` <div><span>${inputValue}</span></div>
  <div><i class="fa-solid fa-trash"></i>
  <i class="fa-solid fa-pen-to-square"></i></div>`;
  if (inputValue === "") {
    alert("bir görev girmelisin.");
  } else {
    document.getElementById("to-do-list").appendChild(li);
  }
  document.getElementById("input").value = "";


}
