const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");
greetingText = greeting.querySelector("h4");
clock = document.querySelector(".js-clock");
menu = document.querySelector(".js-menu");
weather = document.querySelector(".js-weather");
toDo = document.querySelector(".js-toDo");

const USER_LS = "currentUser",
  SHOWING_ON = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  if (currentValue == "") {
    return;
  }
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_ON);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_ON);
  greeting.classList.add(SHOWING_ON);
  clock.classList.add(SHOWING_ON);
  menu.classList.add(SHOWING_ON);
  weather.classList.add(SHOWING_ON);
  toDo.classList.add(SHOWING_ON);

  const hour = currentHour();
  if (hour >= 7 && hour < 10) {
    greetingText.innerText = `Good morning, ${text}!`;
  } else if (hour >= 12 && hour < 15) {
    greetingText.innerText = `Good afternoon, ${text}!`;
  } else if (hour >= 18 && hour < 21) {
    greetingText.innerText = `Good evening, ${text}.`;
  } else if (hour >= 21 && hour < 24) {
    greetingText.innerText = `How was your day, ${text}?`;
  } else if (hour >= 0 && hour < 4) {
    greetingText.innerText = `Good night, ${text}.`;
  } else {
    greetingText.innerText = `Hello, ${text}!`;
  }
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
  input.addEventListener("focus", function (event) {
    input.placeholder = "";
  });
  input.addEventListener("blur", function (event) {
    input.placeholder = "What's your name?";
  });
}

init();
