// SELECT REQUIRED HTML ELEMENTS
const temperature = document.querySelector("#current-temp");
const icon = document.querySelector("#weather-icon");
const caption = document.querySelector("figcaption");

// API KEY
const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.76623461783792&lon=6.640517340469874&units=metric&appid=bdb8cf37e14a7951b5cb374da1a2da9b";

// API FETCH FUNCTION
async function apiFetch() {

    try {

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();

            console.log(data);
            displayResults(data);
        }

        else {
            throw Error(await response.text());
        }

    } catch (error) {

        console.log(error);
        throw error;

    }
}

// DISPLAY RESULTS FUNCTION
function displayResults(data) {

    let name = data.name;
    let description = data.weather[0].description;

    temperature.innerHTML = `${data.main.temp}&deg;F`;
    caption.innerHTML = `${name} ${description}`;

    const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    icon.setAttribute("src", weatherIcon);
    icon.setAttribute("alt", description);
} 

apiFetch();