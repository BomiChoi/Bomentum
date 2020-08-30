const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

const CLOCK_SETTING = "clockSetting";
let clockType = JSON.parse(localStorage.getItem(CLOCK_SETTING));
if (clockType === null) {
  clockType = true;
}

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  let hourText = `${hours < 10 ? `0${hours}` : hours}`;
  if (!clockType) {
    if (hours == 0) {
      hourText = `AM 12`;
    } else if (hours > 0 && hours < 10) {
      hourText = `AM 0${hours}`;
    } else if (hours == 10 || hours == 11) {
      hourText = `AM ${hours}`;
    } else if (hours > 12 && hours < 22) {
      hourText = `PM ${hours - 12}`;
    } else {
      hourText = `PM ${hours - 12}`;
    }
  }
  clockTitle.innerText = `${hourText}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
