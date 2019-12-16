const API_KEY = "72a606cb8b68a8a53457879a98b29cab";
const COORDS = "coords";
const weather = document.querySelector(".js-weather");

function getWeahter(lat, lon) {
  weather.classList.add("showing");
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      const temp = json.main.temp;
      const name = json.name;
      const weatherCkeck = json.weather[0].main;
      weather.innerText = `${temp}℃ / ${name} / ${weatherCkeck}`;
    });
}

function saveTheCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoError() {
  console.log("Cant get geolocation");
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };
  saveTheCoords(coordsObj);
  getWeahter(latitude, longitude);
}

function askForCoords() {
  navigator.geolocation.watchPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeahter(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
