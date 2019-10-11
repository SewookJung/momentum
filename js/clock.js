const clockDiv = document.querySelector(".js-clock"),
  h1 = clockDiv.querySelector("h1");

function loadTheTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  h1.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  loadTheTime();
  setInterval(loadTheTime, 1000);
}
init();
