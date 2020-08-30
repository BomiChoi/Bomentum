const body = document.querySelector("body");

function paintImage() {
  const image = document.createElement("div");
  const hour = currentHour();
  let src = "";
  let random;
  if (hour >= 5 && hour < 8) {
    // 새벽
    random = genRandom(5);
    src = `img/dawn${random + 1}.jpg`;
  } else if (hour >= 8 && hour < 17) {
    //낮
    random = genRandom(6);
    src = `img/day${random + 1}.jpg`;
  } else if (hour >= 17 && hour < 20) {
    // 저녁
    random = genRandom(3);
    src = `img/evening${random + 1}.jpg`;
  } else {
    // 밤
    random = genRandom(4);
    src = `img/night${random + 1}.jpg`;
  }
  image.style.backgroundImage = `url("${src}")`;

  image.classList.add("bgImage");
  body.appendChild(image);
}

function init() {
  paintImage();
}

init();
