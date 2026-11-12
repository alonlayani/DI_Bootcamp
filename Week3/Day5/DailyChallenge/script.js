// ==========================================================
// Week 3 - Day 5 - Daily Challenge : Todo list
// Bonus I and II included (array of objects, doneTask, deleteTask)
// ==========================================================
const tasks = [];
let nextId = 0;

const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const listTasks = document.querySelector(".listTasks");

function addTask(event) {
  event.preventDefault();
  const text = input.value.trim();
  if (text === "") {
    return;
  }

  const task = { task_id: nextId++, text: text, done: false };
  tasks.push(task);

  // DOM: "X" button, checkbox, label
  const div = document.createElement("div");
  div.classList.add("task");
  div.dataset.taskId = task.task_id;

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  deleteBtn.addEventListener("click", deleteTask);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = `task-${task.task_id}`;
  checkbox.addEventListener("change", doneTask);

  const label = document.createElement("label");
  label.htmlFor = checkbox.id;
  label.textContent = task.text;

  div.append(deleteBtn, checkbox, label);
  listTasks.appendChild(div);

  input.value = "";
}

function doneTask(event) {
  const div = event.target.closest(".task");
  const task = tasks.find((t) => t.task_id === Number(div.dataset.taskId));
  task.done = event.target.checked;
  div.classList.toggle("done", task.done);
}

function deleteTask(event) {
  const div = event.target.closest(".task");
  const index = tasks.findIndex((t) => t.task_id === Number(div.dataset.taskId));
  tasks.splice(index, 1);
  div.remove();
}

form.addEventListener("submit", addTask);
