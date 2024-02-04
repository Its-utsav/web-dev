const addTheTask = document.querySelector(".add-task");
const inputTask = document.querySelector("#task-input-user");
const recenttask = document.querySelector(".recent-tasks");

addTheTask.addEventListener("click", () => {
  if (inputTask.value !== "") {
    // in input box is not empty than create new element `li`
    const taskList = document.createElement("li");
    taskList.classList.add("task");
    // for giving style

    //for task added values
    taskList.innerHTML = `
  <i class="fa-solid fa-trash del"></i>
  <i class="fa-solid fa-pen-to-square edit"></i> <span> ${inputTask.value} </span> <br>`;
    // clearing per value
    inputTask.value = "";
    recenttask.appendChild(taskList);

    const edit = taskList.querySelector(".edit");

    edit.addEventListener("click", () => {
      const taskEl = taskList.querySelector("span");
      const taskText = taskEl.textContent;
      const newTaskText = prompt("Edit Task:", taskText);
      console.log("hhhah");
      if (newTaskText !== null) {
        taskEl.innerHTML = `${newTaskText}`;
      }
    });

    const deleteBtn = taskList.querySelector(".del");
    deleteBtn.addEventListener("click", () => {
      taskList.remove();
    });
  } else {
    alert("NONO");
  }
  saveData();
  displayData();
});

recenttask.addEventListener("click", () => {
  const target = event.target;
  console.log(target);

  if (target.classList.contains("edit")) {
    const taskEl = target.parentElement.querySelector("span");
    const taskText = taskEl.textContent;
    const newTaskText = prompt("Edit Task:", taskText);
    console.log("hhhah");
    if (newTaskText !== null) {
      taskEl.innerHTML = `${newTaskText}`;

      saveData();
    }
  }

  if (target.classList.contains("del")) {
    const pEle = target.parentElement;
    pEle.remove();
    saveData();
  }
});

const timeEle = document.querySelector(".time");

const time = setInterval(function () {
  const NowTime = new Date();
  timeEle.innerHTML = NowTime.toLocaleTimeString();
}, 1000);

// save in local

function saveData() {
  localStorage.setItem("task", recenttask.innerHTML);
}

// display data

function displayData() {
  recenttask.innerHTML = localStorage.getItem("task") || "";
}

displayData();
