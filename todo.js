const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function check(label) {
  const checkBtn = label.querySelector("div");
  label.classList.add("checked");
  checkBtn.classList.add("checked");
  checkBtn.innerText = "✔";
}
function uncheck(label) {
  const checkBtn = label.querySelector("div");
  label.classList.remove("checked");
  checkBtn.classList.remove("checked");
  checkBtn.innerText = "";
}

function checkToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const label = li.querySelector("label");
  const id = li.id - 1;
  if (btn.checked) {
    toDos[id].isChecked = true;
    check(label);
  } else {
    toDos[id].isChecked = false;
    uncheck(label);
  }
  saveTodos();
}

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  toDosLi = toDoList.querySelectorAll("li");
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  // 아이디 다시 부여하기
  for (var i = 0; i < toDos.length; i++) {
    toDos[i].id = i + 1;
    const li = toDosLi[i];
    li.id = String(i + 1);
    li.querySelector("input").id = "todo" + String(i + 1);
    li.querySelector("label").setAttribute("for", "todo" + String(i + 1));
  }
  saveTodos();
}

function saveTodos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text, checked) {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  const checkBtn = document.createElement("div");
  const label = document.createElement("label");
  const delBtn = document.createElement("button");
  const newId = toDos.length + 1;
  checkbox.type = "checkbox";
  checkbox.id = "todo" + newId;
  checkBtn.classList.add("checkbox");
  label.setAttribute("for", "todo" + newId);
  delBtn.innerText = "❌";

  checkbox.addEventListener("change", checkToDo);
  delBtn.addEventListener("click", deleteToDo);

  label.innerText = text;
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(delBtn);
  label.prepend(checkBtn);

  if (checked) {
    check.checked = true;
    check(label);
  } else {
    check.checked = false;
    uncheck(label);
  }

  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
    isChecked: checked,
  };
  toDos.push(toDoObj);
  saveTodos();
  toDoInput.value = "";
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  if (currentValue == "") {
    return;
  }
  paintToDo(currentValue, false);
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text, toDo.isChecked);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
  toDoInput.addEventListener("focus", function (event) {
    toDoInput.placeholder = "";
  });
  toDoInput.addEventListener("blur", function (event) {
    toDoInput.placeholder = "Write a to-do";
  });
}

init();
