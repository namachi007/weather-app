const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const weatherForm = document.getElementById("weatherForm");
const cityInput = document.getElementById("cityInput");
const weatherDisplay = document.getElementById("weatherDisplay");
const errorMessage = document.getElementById("errorMessage");
const cityNameElem = document.getElementById("cityName");
const temperatureElem = document.getElementById("temperature");
const humidityElem = document.getElementById("humidity");
const descriptionElem = document.getElementById("description");
const weatherIconElem = document.getElementById("weatherIcon");

async function fetchWeatherData(city) {
  console.log(encodeURIComponent(
    city));
  const url = `${BASE_URL}?q=${encodeURIComponent(
    city
  )}&appid=${API_KEY}&units=metric`;
  try {
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw "City not found or unable to fetch data.";
    } else {
      throw "Network error. Please check your connection.";
    }
  }
}

function displayWeather(data) {
  console.log(data);
  const { name, main, weather } = data;
  cityNameElem.textContent = name;
  temperatureElem.textContent = `Temperature: ${Math.round(main.temp)}°C`;
  humidityElem.textContent = `Humidity: ${main.humidity}%`;
  descriptionElem.textContent = `Condition: ${weather[0].main}`;
  weatherIconElem.src = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  weatherIconElem.alt = weather[0].description;

  weatherDisplay.classList.remove("hidden");
  errorMessage.classList.add("hidden");
}

weatherForm.addEventListener("submit", async function (event) {
  event.preventDefault();
  const city = cityInput.value.trim();
  if (!city) return;

  errorMessage.textContent = "";
  weatherDisplay.classList.add("hidden");

  try {
    const data = await fetchWeatherData(city);
    console.log(data);
    displayWeather(data);
  } catch (error) {
    errorMessage.textContent = error;
    errorMessage.classList.remove("hidden");
  }
});