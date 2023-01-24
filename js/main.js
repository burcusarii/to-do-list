"use strict";
let list = document.getElementById("to-do-list");

function addtask() {
  if (document.getElementById("input").value == "") {
    alert("bir görev giriniz");
  } else {
    list.innerHTML += ` <li id="task">
      <div>
        <h3>${document.getElementById("input").value}</h3>
      </div>
      <div>
        <i class="fa-solid fa-pen"></i>
        <i class="fa-solid fa-trash-can delete"></i>
      </div>
    </li>`;
    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.parentNode.remove();
      };
      document.getElementById("input").value = " ";
      event.preventDefault();
    }
  }
}