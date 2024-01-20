const addTask = document.querySelector("#new-task");
const taskDes = document.querySelector("#task-des");
const time = document.querySelector("#due-time");
const subBtn = document.querySelector("#submit-btn");
const allTask = document.querySelector(".all-tasks");

subBtn.addEventListener("click", (e) => {
  if (addTask.value !== "") {
    e.preventDefault();
    console.log(addTask.value + " task  add");
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `<div class="task-name">
    <i class="fa-solid fa-check icon check-icon"></i>
    <i class="fa-solid fa-trash icon del-icon"></i>
        ${addTask.value}
    </div>
    <span class="shdes">${taskDes.value}</span>
    <span class="date">${time.value}</span>`;
    newDiv.classList = "task";
    allTask.appendChild(newDiv);
    const completeTask = document.querySelectorAll(".check-icon");

    saveTheData();

    const del = document.querySelectorAll(".del-icon");
    del.forEach((delTask) => {
      delTask.addEventListener("click", () => {
        newDiv.remove();
        saveTheData();
      });
    });

    completeTask.forEach((cTask) => {
      cTask.addEventListener("click", () => {
        newDiv.style.textDecoration = " line-through";
        saveTheData();
      });
    });

    addTask.value = "";
    taskDes.value = "";
    time.value = "";
  } else {
    alert(`please enter some text.`);
  }
});

function saveTheData() {
  const task = document.querySelectorAll(".task");
  const recentTask = [];
  task.forEach((tasks) => {
    recentTask.push(tasks.innerHTML);
    console.log(task.innerHTML);
  });
  localStorage.setItem("task-list", JSON.stringify(recentTask));
}

function showTheData() {
  const storedData = localStorage.getItem("task-list");

  // Check if the stored data is not null or undefined
  if (storedData) {
    try {
      const parsedData = JSON.parse(storedData);
      parsedData.forEach((taskData) => {
        const newDiv = document.createElement("div");
        newDiv.classList = "task";
        newDiv.innerHTML = taskData;
        allTask.appendChild(newDiv);
      });
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  }
}

showTheData();
