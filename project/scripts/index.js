import { toggleNav } from "./utilities.js";
toggleNav();

// Weather API

const key = "22847c8635ca17519288b6791befd290";
const url = "https://api.openweathermap.org/data/2.5/weather?lat=-34.51928987290528&lon=-58.536041339008186&&units=metric&appid=bdb8cf37e14a7951b5cb374da1a2da9b";

async function getWeatherInfo() {

    const response = await fetch(url);

    if(response) {

        try {
            const data = await response.json();
            console.log(data);
            displayWeather(data);

        } catch(error) {
            console.error(error);
        }
    }

    else {
        console.log("Error!");
    }
    
}

getWeatherInfo();

const temperature = document.querySelector("#temperature");
const weather = document.querySelector("#weather");
const highest = document.querySelector("#highest");
const lowest = document.querySelector("#lowest");
const humidity = document.querySelector("#humidity");
const sunrise = document.querySelector("#sunrise");
const windspeed = document.querySelector("#windspeed");

async function displayWeather(data) {

    temperature.innerHTML = `<strong>Current Temperature:</strong> ${data.main.temp}°C`;
    weather.innerHTML = `<strong>Weather:</strong> ${data.weather[0].description}`;
    highest.innerHTML = `<strong>Max Temp:</strong> ${data.main.temp_max}°C`;
    lowest.innerHTML = `<strong>Min Temp:</strong> ${data.main.temp_min}°C`;
    humidity.innerHTML = `<strong>Humidity:</strong> ${data.main.humidity}`;
    windspeed.innerHTML = `<strong>Windspeed:</strong> ${data.wind.speed}`;

}

// Local Storage

const welcomeMessage = document.querySelector(".localStorage");
const lastVisit = localStorage.getItem("lastVisit");
const currentVisit = Date.now();

if (!lastVisit) {
    welcomeMessage.innerHTML = "Welcome! Let's enjoy sports together!"
}
else {
    let thisVisit = currentVisit - lastVisit;
    const daysDifference = Math.floor(thisVisit / (1000 * 60 * 60 * 24));

    if (daysDifference < 1) {
        welcomeMessage.innerHTML = "Back so soon! Great!";
    }
    else {
        welcomeMessage.innerHTML = `We missed you! You visited ${daysDifference} days ago. Great to have you back!`;
    }
}

localStorage.setItem("lastVisit", currentVisit);