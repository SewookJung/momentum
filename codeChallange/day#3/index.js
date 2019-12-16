const body = document.querySelector("body");
const colors = ["#74b9ff", "#ff7675", "#00cec9"];
const DEFAULT_BG = colors[0];

function sizeHandler() {
  const width = body.offsetWidth;
  if (width > 1024) {
    body.style.backgroundColor = colors[0];
  } else if (width > 512) {
    body.style.backgroundColor = colors[1];
  } else if (width > 256) {
    body.style.backgroundColor = colors[2];
  }
}

function init() {
  body.style.backgroundColor = DEFAULT_BG;
  body.style.transition = "background-color 0.5s ease-in-out";
  window.addEventListener("resize", sizeHandler);
}

init();
