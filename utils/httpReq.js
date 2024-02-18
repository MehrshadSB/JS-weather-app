const BASE_URL = `https://api.openweathermap.org/data/2.5`;
const API_KEY = "237dc4d0c72f60768fd3b21a8e9811ea";

const getCurrentWeatherByName = async (city) => {
  const url = `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const response = await fetch(url);
  const json = await response.json();

  return json;
};

const getCurrentWeatherByCoordinates = async (lat, lon) => {
  const url = `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  const response = await fetch(url);
  const json = await response.json();

  return json;
};

const getForecastWeatherByName = async (city) => {
  const url = `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`;

  const response = await fetch(url);
  const json = await response.json();

  return json;
};

export {
  getCurrentWeatherByName,
  getCurrentWeatherByCoordinates,
  getForecastWeatherByName,
  BASE_URL,
  API_KEY,
};
