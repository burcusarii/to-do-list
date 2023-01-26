"use strict";
function newTask(event) {
  let li = document.createElement("li");
  li.className ="task";
  let inputValue = document.getElementById("input").value;
  li.innerHTML = ` <div class="task-content">
  <input type="text" id="task-value" readonly="readonly" value="${inputValue}"> </div>
<div class="task-action">
  <i class="fa-solid fa-trash delete"></i>
  <span onclick="editTask()" id="edit-buton" value="EDIT">EDIT</span>
</div>`;
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

function editTask() {
  let task_edit_botton = document.getElementById("edit-buton");
  let taskValue = document.getElementById("task-value");
    if (task_edit_botton.innerText=="EDIT") {
      console.log("value");
      taskValue.removeAttribute("readonly");
      taskValue.focus();
            task_edit_botton.innerText = "Save";
    }else{
      taskValue.setAttribute("readonly", "readonly");
        task_edit_botton.innerText ="EDIT";
        
    }
  };