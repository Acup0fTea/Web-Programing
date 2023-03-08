const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

function addTask(event) {
  event.preventDefault();
  const task = taskInput.value.trim();

  if (task.length > 0) {
    const taskItem = document.createElement("li");
    const taskSpan = document.createElement("span");
    const deleteButton = document.createElement("button");

    taskSpan.textContent = task;
    deleteButton.innerHTML = `Delete`;

    deleteButton.addEventListener("click", function () {
      taskList.removeChild(taskItem);
    });

    taskItem.appendChild(taskSpan);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    taskInput.value = "";
    taskInput.focus();

    taskSpan.addEventListener("click", function () {
      taskSpan.classList.toggle("completed");
    });

    addButton.disabled = true;
  }
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    addTask(event);
  }

  addButton.disabled = taskInput.value.trim().length === 0;
});
