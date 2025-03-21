// Last Modified

const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;

// Current Weather Section
const temperature = document.querySelector("#temperature");
const weather = document.querySelector("#weather");
const highest = document.querySelector("#highest");
const lowest = document.querySelector("#lowest");
const humidity = document.querySelector("#humidity");
const sunrise = document.querySelector("#sunrise");
const sunset = document.querySelector("#sunset");

// Weather Forecast Section
const tomorrow = document.querySelector("#tomorrow");
const nextDay = document.querySelector("#nextday");
const otherDay = document.querySelector("#otherday");

const icon = document.querySelector("#weather-image");

// Get data from API
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-34.58858385821943&lon=-58.398298709972465&units=metric&appid=bdb8cf37e14a7951b5cb374da1a2da9b';
const secondUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=-34.58858385821943&lon=-58.398298709972465&units=metric&appid=0edd4c5a4e799f388484da65c1445a37';


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

async function getForecast() {

    try {

        const response = await fetch(secondUrl);

        if (response.ok) {

            const data = await response.json();

            console.log(data);
            displayForecast(data);
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

    const sunriseTime = new Date(currentSunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(currentSunset * 1000).toLocaleTimeString();

    sunrise.innerHTML = `<strong>Sunrise:</strong> ${sunriseTime}`;
    sunset.innerHTML = `<strong>Sunset:</strong> ${sunsetTime}`;

    // Icon
    const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    icon.setAttribute("src", weatherIcon);
    icon.setAttribute("alt", currentWeather);

}

function displayForecast(data) {

    // Display Tomorrow
    const tomorrowTemp = data.list[1].main.temp;
    tomorrow.innerHTML = `<strong>Tomorrow's Temperature:</strong> ${tomorrowTemp}°C`;

    // Display Next Day
    const nextDayTemp = data.list[2].main.temp;
    nextDay.innerHTML = `<strong>Next Day's Temperature:</strong> ${nextDayTemp}°C`;

    // Display Other Day
    const otherDayTemp = data.list[3].main.temp;
    otherDay.innerHTML = `<strong>3 day's Temperature:</strong> ${otherDayTemp}°C`;

}



// Spotlight members

const spotlight = document.querySelector(".spotlight-members");
const membersUrl = 'data/members.json';

async function getSpotlightMembers() {

    const response = await fetch(membersUrl);

    if (response.ok) {

        const data = await response.json();
        displaySpotlight(data);
    }

    else {
        console.log("Error here!");
    }

}

function displaySpotlight(data) {

    const spotlightMembers = data.members.filter(member => member.membershipLabel === 1 ||
        member.membershipLabel === 2);

    const shuffledMembers = spotlightMembers.sort(() => Math.random() - 0.5);
    const selectedMembers = shuffledMembers.slice(0, 3);

    spotlight.innerHTML = "";

    selectedMembers.forEach(member => {

        // Creating HTML tags
        
        const memberCard = document.createElement("section");
        memberCard.classList.add("card");

        const mainInfo = document.createElement("div");
        mainInfo.classList.add("main-info");
        const fullName = document.createElement("h2");

        const information = document.createElement("div");
        information.classList.add("information");

        const imageDiv = document.createElement("div");
        imageDiv.classList.add("imageDiv");
        const companyImage = document.createElement("img");

        const generalInfo = document.createElement("div");
        generalInfo.classList.add("general-information");
        const emailTag = document.createElement("p");
        const phoneTag = document.createElement("p");
        const urlTag = document.createElement("p");
        const addressTag = document.createElement("p");

        // Inserting Data
        fullName.innerHTML = member.name;

        companyImage.setAttribute("src", member.image);
        companyImage.setAttribute("alt", `${member.name} logo`);
        companyImage.setAttribute("loading", "lazy");
        companyImage.setAttribute("width", 80);
        companyImage.setAttribute("height", 30);

        emailTag.innerHTML = `<span>Email:</span> ${member.email}`;
        phoneTag.innerHTML = `<span>Phone Number:</span> ${member.phoneNum}`;
        urlTag.innerHTML = `<span>Website:</span> ${member.website}`;
        addressTag.innerHTML = `<span>Address:</span> ${member.address}`;

        mainInfo.appendChild(fullName);

        imageDiv.appendChild(companyImage);

        generalInfo.appendChild(emailTag);
        generalInfo.appendChild(phoneTag);
        generalInfo.appendChild(urlTag);
        generalInfo.appendChild(addressTag);

        information.appendChild(imageDiv);
        information.appendChild(generalInfo);

        memberCard.appendChild(mainInfo);
        memberCard.appendChild(information);

        spotlight.appendChild(memberCard);

    });
}

getWeather();
getForecast();
getSpotlightMembers();