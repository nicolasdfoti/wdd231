// Weather Section
const temperature = document.querySelector("#temperature");
const weather = document.querySelector("#weather");
const highest = document.querySelector("#highest");
const lowest = document.querySelector("#lowest");
const humidity = document.querySelector("#humidity");
const sunrise = document.querySelector("#sunrise");
const sunset = document.querySelector("#sunset");

const today = document.querySelector("#today");
const tomorrow = document.querySelector("#tomorrow");
const otherDay = document.querySelector("#otherday");

const icon = document.querySelector("#weather-image");

// Get data from API
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-34.58858385821943&lon=-58.398298709972465&units=metric&appid=bdb8cf37e14a7951b5cb374da1a2da9b';


async function getWeather() {

    try {

        const response = await fetch(url);

        if (response.ok) {

            const data = await response.json();

            console.log(data);
            displayWeather(data);
        }

        else {
            throw Error(await response.text());
        }

    } catch (error) {

        console.log(error);
        throw error;
    }

}

function displayWeather(data) {

    // Display Temperature
    const currentTemp = data.main.temp;
    temperature.innerHTML = `<strong>Temperature:</strong> ${currentTemp}°C`;

    // Display Weather
    const currentWeather = data.weather[0].description;
    weather.innerHTML = currentWeather;

    // Display Highest - Lowest Temperature
    const currentHighest = data.main.temp_max;
    highest.innerHTML = `<strong>Highest Temperature:</strong> ${currentHighest}°C`;

    const currentLowest = data.main.temp_min;
    lowest.innerHTML = `<strong>Lowest Temperature:</strong> ${currentLowest}°C`;

    // Humidity
    const currentHumidity = data.main.humidity;
    humidity.innerHTML = `<strong>Humidity:</strong> ${currentHumidity}`;

    // Sunrise - Sunset
    const currentSunrise = data.sys.sunrise;
    const currentSunset = data.sys.sunset;

    sunrise.innerHTML = `<strong>Sunrise:</strong> ${currentSunrise}`;
    sunset.innerHTML = `Sunset: ${currentSunset}`;

    // Icon
    const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    icon.setAttribute("src", weatherIcon);
    icon.setAttribute("alt", currentWeather)

}

getWeather()