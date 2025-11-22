const cityInput = document.getElementById("cityInput");
const getBtn = document.getElementById("getWeatherBtn");

const tempEl = document.getElementById("temp");
const humidityEl = document.getElementById("humidity");
const conditionEl = document.getElementById("condition");
const errorEl = document.getElementById("error");

async function getWeather() {
    const city = cityInput.value.trim();
    if (city === "") {
        errorEl.innerText = "Please enter a city name.";
        return;
    }

    errorEl.innerText = "Loading...";

    try {
        const API_KEY = "45978568b7de4c4a8a3b17982c75710a";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Invalid city");
        }

        const data = await response.json();

        // Update UI
        tempEl.innerText = data.main.temp + "°C";
        humidityEl.innerText = data.main.humidity + "%";
        conditionEl.innerText = data.weather[0].description;

        errorEl.innerText = "";
    } catch (err) {
        errorEl.innerText = "Invalid city name or error fetching data.";
        tempEl.innerText = "";
        humidityEl.innerText = "";
        conditionEl.innerText = "";
    }
}

getBtn.addEventListener("click", getWeather);
