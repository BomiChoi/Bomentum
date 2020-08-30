const menu = document.querySelector(".js-menu"),
  menuBtn = menu.querySelector(".btn"),
  menuList = menu.querySelector(".menu"),
  menus = menuList.getElementsByTagName("button");
function showList() {
  menuList.classList.add(SHOWING_ON);
}
function hideList() {
  menuList.classList.remove(SHOWING_ON);
}

menu.addEventListener("mouseenter", showList);
menu.addEventListener("mouseleave", hideList);

function changeClock() {
  if (clockType) {
    clockType = false;
  } else {
    clockType = true;
  }
  localStorage.setItem(CLOCK_SETTING, JSON.stringify(clockType));
}

function clearTodo() {
  toDos = [];
  saveTodos();
  const children = toDoList.querySelectorAll("li");
  children.forEach(function (child) {
    toDoList.removeChild(child);
  });
}

function logout() {
  localStorage.removeItem(USER_LS);
  location.reload();
}

menus[0].addEventListener("click", changeClock);
menus[1].addEventListener("click", askForCoords);
menus[2].addEventListener("click", clearTodo);
menus[3].addEventListener("click", logout);
