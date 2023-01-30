newTask();
function newTask() {
  const add_task = document.querySelector("#task-input");
  const input_task = document.querySelector("#input");
  const tasks_list = document.querySelector("#to-do-list");
  const add_btn = document.querySelector("#task-add");

  add_btn.addEventListener("click", function () {
    if (input_task.value == "") {
      alert("lütfen bir görev giriniz.");
      return;
    }

    // task listesine altına her bir task için eklenen list elemanı
    const task_li = document.createElement("li");
    task_li.classList.add("task");
    tasks_list.appendChild(task_li);

    // her task elemanı içine oluşturulan task başlığının yer aldığı content elemanı;
    const task_div_content = document.createElement("div");
    task_div_content.classList.add("task-content");
    task_li.appendChild(task_div_content);

    // content elemanı içine input_task'a girilen değerin eklendiği task inputu.
    const added_task = document.createElement("input");
    added_task.classList.add("task-value");
    added_task.type = "text";
    added_task.value = input_task.value;
    added_task.setAttribute("readonly", "readonly");
    task_div_content.append(added_task);

    // her task elemanı için oluşturulan task'in silinmesi, işaretlenmesi ve düzenlenmesi için eklenmiş action elemanı;
    const task_div_action = document.createElement("div");
    task_div_action.classList.add("task-action");
    task_li.appendChild(task_div_action);

    // task'in silinmesi için action içine eklenmiş delete elemanı
    const delete_button = document.createElement("span");
    delete_button.classList.add("delete");
    delete_button.innerHTML = "<i class='fa-solid fa-trash'></i>";

    // task'in düzenlenmesi için action içine eklenmiş edit elemanı
    const edit_button = document.createElement("span");
    edit_button.classList.add("edit");
    edit_button.value = "edit";
    edit_button.innerHTML = "<i class='fa-solid fa-pen'></i>";

    // task'in işaretlenmesi için action içine eklenmiş completed elemanı
    const completed_button = document.createElement("span");
    completed_button.classList.add("completed");
    completed_button.innerHTML = "<i class='fa-regular fa-square-check'></i>";

    task_div_action.appendChild(delete_button);
    task_div_action.appendChild(edit_button);
    task_div_action.appendChild(completed_button);

    edit_button.addEventListener("click", function () {
      console.log(edit_button.value);
      if (edit_button.value == "edit") {
        added_task.removeAttribute("readonly");
        added_task.focus();
        edit_button.value = "save";
        added_task.style.textDecoration = "none";
      } else {
        added_task.setAttribute("readonly", "readonly");
        edit_button.value = "edit";
      }
    });

    delete_button.addEventListener("click", function () {
      tasks_list.removeChild(task_li);
    });
    input_task.value = "";

    completed_button.addEventListener("click", function () {
      added_task.style.textDecoration = "line-through";
      added_task.setAttribute("readonly", "readonly");
    });
  });
}
