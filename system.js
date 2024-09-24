document.getElementById("addTaskButton").addEventListener("click", addTask);
document
  .getElementById("delete-button-active")
  .addEventListener("click", deleteCurrentTasks);
document
  .getElementById("active-label")
  .addEventListener("click", showActiveTasks);
document.getElementById("done-label").addEventListener("click", showDoneTasks);
document.getElementById("login-btn").addEventListener("click", accountLogin);

const activeTask = document.getElementById("activeTask");
const doneTask = document.getElementById("doneTask");
const activeLabel = document.getElementById("active-label");
const doneLabel = document.getElementById("done-label");
const inputName = document.getElementById("name-input");
const inputJob = document.getElementById("job-input");
const loginForm = document.getElementById("login-form");
const mainCont = document.getElementById("mainCont");
const profilDetail = document.getElementById("profil-detail");
const navbar = document.getElementById("navbar");

updatePlaceholder();
function addTask() {
  // teks
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  // prioritas
  const prioritySelect = document.getElementById("prioritySelect");
  const priority = prioritySelect.value;
  // deadline
  const deadlineTime = document.getElementById("deadlineDate");
  const deadline = new Date(deadlineTime.value);

  if (taskText === "") {
    alert("Please Enter a Task");
    return;
  }

  if (deadlineTime.value === "") {
    alert("Please input deadline");
    return;
  }

  // Create elements
  const newDiv = document.createElement("div");
  const bigDiv = document.createElement("div");
  newDiv.id = "list-item";
  bigDiv.className = "bigdiv";

  // Task text
  const taskList = document.createElement("li");
  taskList.innerHTML = taskText;

  // Checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      taskList.classList.add("checked");
      moveDone(bigDiv);
    } else {
      taskList.classList.remove("checked");
      activeTask.appendChild(bigDiv);
    }
    updatePlaceholder();
  });

  // Priority
  const priorityLabel = document.createElement("span");
  priorityLabel.innerHTML = `${priority} Priority`;
  priorityLabel.className = `${priority}`;

  // Deadline
  const deadlineLabel = document.createElement("span");
  deadlineLabel.className = "deadline";
  deadlineLabel.innerHTML = `Deadline on ${deadline.toLocaleDateString()}`;

  // Append elements
  newDiv.appendChild(checkbox);
  newDiv.appendChild(taskList);
  newDiv.appendChild(priorityLabel);

  bigDiv.appendChild(newDiv);
  bigDiv.appendChild(deadlineLabel);

  activeTask.appendChild(bigDiv);

  taskInput.value = "";
  deadlineTime.value = "";
  updatePlaceholder();
}

function moveDone(task) {
  doneTask.appendChild(task);
  updatePlaceholder();
}

function deleteCurrentTasks() {
  if (!activeTask.classList.contains("hidden")) {
    activeTask.innerHTML = "<li class='placeholder'>No active tasks yet</li>";
  } else if (!doneTask.classList.contains("hidden")) {
    doneTask.innerHTML = "<li class='placeholder'>No tasks done yet</li>";
  }
}

function showActiveTasks() {
  activeTask.classList.remove("hidden");
  doneTask.classList.add("hidden");
  activeLabel.classList.add("mark");
  doneLabel.classList.remove("mark");
  updatePlaceholder();
}

function showDoneTasks() {
  activeTask.classList.add("hidden");
  doneTask.classList.remove("hidden");
  doneLabel.classList.add("mark");
  activeLabel.classList.remove("mark");
  updatePlaceholder();
}

function updatePlaceholder() {
  const activePlaceholder = activeTask.querySelector(".placeholder");
  const donePlaceholder = doneTask.querySelector(".placeholder");

  if (activeTask.children.length > 1) {
    activePlaceholder.classList.add("hidden");
  } else {
    activePlaceholder.classList.remove("hidden");
  }

  if (doneTask.children.length > 1) {
    donePlaceholder.classList.add("hidden");
  } else {
    donePlaceholder.classList.remove("hidden");
  }
}

function accountLogin() {
  const nameTeks = inputName.value.trim();
  const jobTeks = inputJob.value.trim();

  if (nameTeks == "") {
    alert("Silahkan isi nama anda");
    return;
  }

  if (jobTeks == "") {
    alert("Silahkan isi job anda");
    return;
  }
  inputName.value = "";
  inputJob.value = "";
  alert(`Selamat Datang ${nameTeks}`);

  loginForm.classList.add("hidden");
  mainCont.classList.remove("hidden");
  navbar.classList.remove("hidden");

  const nameLabel = document.createElement("p");
  nameLabel.innerHTML = nameTeks;
  const jobLabel = document.createElement("p");
  jobLabel.innerHTML = jobTeks;

  profilDetail.appendChild(nameLabel);
  profilDetail.appendChild(jobLabel);
}
