const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAll = document.querySelector(".footer button");

inputBox.onkeyup = () => {
  let userData = inputBox.value;
  if (userData.trim() != 0) {
    addBtn.classList.add("active");
  } else {
    addBtn.classList.remove("active");
  }
}

addBtn.onclick = () => {
  let userData = inputBox.value;
  let getLocalStorage = localStorage.getItem("New ToDo");
  if (getLocalStorage == null) {
    listArr = [];
  } else {
    listArr = JSON.parse(getLocalStorage);
  }
  listArr.push(userData);
  localStorage.setItem("New ToDo", JSON.stringify(listArr));
  showTasks();
  addBtn.classList.remove("active");

}

function showTasks() {
  let getLocalStorage = localStorage.getItem("New ToDo");
  if (getLocalStorage == null) {
    listArr = [];
  } else {
    listArr = JSON.parse(getLocalStorage);
  }
  const pendingNumb = document.querySelector(".pendingNumb");
  pendingNumb.textContent = listArr.length;
  if (listArr.length > 0) {
    deleteAll.classList.add("active");
  } else {
    deleteAll.classList.remove("active");
  }
  let newLiTag = '';
  listArr.forEach((element, index) => {
    newLiTag += `<li>${element} <span onclick='deleteTask(${index})';><i class="fas fa-trash"></i></span></li>`;
  });
  todoList.innerHTML = newLiTag;
  inputBox.value = "";
}

function deleteTask(index) {
  let getLocalStorage = localStorage.getItem("New ToDo");
  listArr = JSON.parse(getLocalStorage);
  listArr.splice(index, 1);
  localStorage.setItem("New ToDo", JSON.stringify(listArr));
  showTasks();
}

deleteAll.onclick = () => {
  listArr = [];
  localStorage.setItem("New ToDo", JSON.stringify(listArr));
  showTasks();
}