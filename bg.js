const body = document.querySelector("body");
let preloadImage;

function paintImage() {
  const image = document.createElement("div");
  const hour = currentHour();
  let src = "";
  let random;
  if (hour >= 5 && hour < 8) {
    // 새벽
    random = genRandom(5);
    src = `img/dawn${random + 1}.jpg`;

    window.onload = function() {
      for(i = 1; i <= 5; i++) {
        preloadImage  = new Image();
        preloadImage.src=`img/dawn${i}.jpg`;
      }
    }
  } else if (hour >= 8 && hour < 17) {
    //낮
    random = genRandom(6);
    src = `img/day${random + 1}.jpg`;

    window.onload = function() {
      for(i = 1; i <= 6; i++) {
        preloadImage  = new Image();
        preloadImage.src=`img/day${i}.jpg`;
      }
    }
  } else if (hour >= 17 && hour < 20) {
    // 저녁
    random = genRandom(3);
    src = `img/evening${random + 1}.jpg`;
   
    window.onload = function() {
      for(i = 1; i <= 3; i++) {
        preloadImage  = new Image();
        preloadImage.src=`img/evening${i}.jpg`;
      }
    }
  } else {
    // 밤
    random = genRandom(4);
    src = `img/night${random + 1}.jpg`;
  
    window.onload = function() {
      for(i = 1; i <= 4; i++) {
        preloadImage  = new Image();
        preloadImage.src=`img/night${i}.jpg`;
      }
    }
  }
  image.style.backgroundImage = `url("${src}")`;

  image.classList.add("bgImage");
  body.appendChild(image);
}

function init() {
  paintImage();
}

init();
