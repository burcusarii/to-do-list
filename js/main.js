"use strict";
function newTask(event) {
  let li = document.createElement("li");
  li.className ="task";
  let inputValue = document.getElementById("input").value;
  li.innerHTML = ` <div class ="task-text">${inputValue}</div>
  <div><i class="fa-solid fa-trash delete"></i>
  <i class="fa-solid fa-pen-to-square"></i></div>`;
  if (inputValue === "") {
    alert("bir görev girmelisin.");
  } else {
    document.getElementById("to-do-list").appendChild(li);
  }
  document.getElementById("input").value = "";

  var delete_task = document.getElementsByClassName("delete");
  for (var i = 0; i < delete_task.length; i++) {
    delete_task[i].onclick = function() {
      var div = this.parentNode.parentNode;
      div.remove();
    }
  }
}

