const body = document.querySelector("body");

const NUMBER_LS = "backgroundNumber";

const IMG_NB = 4;

function saveForBgNumber(getNumber) {
  localStorage.setItem(NUMBER_LS, getNumber);
  paintBgImage(getNumber);
}

function createRandomNumber() {
  const randomNumber = Math.floor(Math.random() * IMG_NB);
  saveForBgNumber(randomNumber);
}

function increaseNumber(getNumber) {
  if (getNumber < 4) {
    getNumber++;
    saveForBgNumber(getNumber);
  } else {
    getNumber = 1;
    saveForBgNumber(getNumber);
  }
}

function paintBgImage(getNumber) {
  const image = new Image();
  image.src = `images/${getNumber}.jpg`;
  body.appendChild(image);
}

function loadNumber() {
  const loadedNumber = localStorage.getItem(NUMBER_LS);
  if (loadedNumber === null) {
    createRandomNumber();
  } else {
    increaseNumber(loadedNumber);
  }
}

function init() {
  loadNumber();
}
init();
