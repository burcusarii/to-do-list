"use strict";
list = document.getElementById("to-do-list");
function newTask(event) {
  let li = document.createElement("li");
  let inputValue = document.getElementById("input").value;
  let task = document.createTextNode(inputValue);
  li.appendChild(task);
  if (inputValue === "") {
    alert("bir görev girmelisin.");
  } else {
    document.getElementById("to-do-list").appendChild(li);
  }
  document.getElementById("input").value = "";
  event.preventDefault();
}
