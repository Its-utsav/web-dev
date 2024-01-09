const input = document.querySelector("#input");
const tasks = document.querySelector(".task-container");
const addTask = document.querySelector("#addTask");

addTask.addEventListener("click", () => {
  if (input.value !== "") {
    const li = document.createElement("li");
    li.classList = "task-list";
    li.innerHTML =
      '<i class="fa-solid fa-check icon check"></i><i class="fa-solid fa-trash icon del"></i>' +
      input.value +
      `<br>`;
    tasks.appendChild(li);

    input.value = "";
    saveTask();

    const deleteTask = li.querySelector(".del");
    const completeTask = li.querySelector(".check");

    deleteTask.addEventListener("click", () => {
      li.remove();
      removeTask();
      saveTask();
    });

    completeTask.addEventListener("click", () => {
      li.style.textDecoration = "line-through";
      saveTask();
      console.log("hi");
    });
  } else {
    alert("Enter some text");
  }
});

// Save the data in local storage
function saveTask() {
  localStorage.setItem("tasks", tasks.innerHTML);
}

// remove the data
function removeTask() {
  localStorage.removeItem("task");
}
// Show data
function showTask() {
  tasks.innerHTML = localStorage.getItem("tasks");
}

showTask();
