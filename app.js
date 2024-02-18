import {
  getCurrentWeatherByName,
  BASE_URL,
  API_KEY,
  getCurrentWeatherByCoordinates,
  getForecastWeatherByName,
} from "./utils/httpReq.js";

const searchInput = document.querySelector("input");
const searchButton = document.querySelector("button");
const weatherContainer = document.getElementById("weather");
const locationIcon = document.getElementById("location");

const renderCurrentWeather = (data) => {
  const weatherJSX = `
    <h1>${data.name}, ${data.sys.country}</h1>
    <div id="main">
      <img alt="weather icon" src="https://openweathermap.org/img/w/${
        data.weather[0].icon
      }.png" />
      <span>${data.weather[0].main}</span>
      <p>${Math.round(data.main.temp)}°C</p>
    </div>
    <div id="info">
      <p>Humidity: <span>${data.main.humidity} %</span></p>
      <p>wind speed: <span>${data.wind.speed} m/s</span></p>
    </div>
  `;

  weatherContainer.innerHTML = weatherJSX;
};

const searchHandler = async () => {
  const cityName = searchInput.value;

  if (!searchInput) {
    alert("please enter a city name");
  }

  const currentData = await getCurrentWeatherByName(cityName);
  renderCurrentWeather(currentData);
  const forecastData = await getForecastWeatherByName(cityName);
  console.log(forecastData);
};

const positionCallback = async (position) => {
  const { latitude, longitude } = position.coords;

  const correntData = await getCurrentWeatherByCoordinates(latitude, longitude);
  renderCurrentWeather(correntData);
};

const errorCallback = (error) => {
  console.log(error);
};

const locationHandler = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(positionCallback, errorCallback);
  } else {
    alert("your browser dose not support geolocation");
  }
};

searchButton.addEventListener("click", searchHandler);
locationIcon.addEventListener("click", locationHandler);
