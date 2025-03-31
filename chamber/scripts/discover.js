// Last Modified

const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;

// Toggle buttons

const hamButton = document.querySelector("#hamButton");
const navigation = document.querySelector("nav");

hamButton.addEventListener("click", () => {
    hamButton.classList.toggle("open");
    navigation.classList.toggle("open");
})

// Sections: Getting info from JSON

const places = 'data/places.json';

async function getPlacesInfo() {

    const response = await fetch(places);

    try {
        if (response.ok) {
            const data = await response.json();
            displayPlacesInfo(data.places);
            return data.places;
        }
        else {
            console.log(error)
        }
    } catch(error) {
        console.log("There was an error with the JSON file!", error);
    }


}

// Sections: Displaying Info

const placesContainer = document.querySelector(".places");

const displayPlacesInfo = (places) => {

    places.forEach(place => {

        const card = document.createElement("section");
        card.classList.add("places-card");

        const title = document.createElement("h2");
        const figure = document.createElement("img");
        const description = document.createElement("p");
        description.classList.add("description");
        const address = document.createElement("p");
        address.classList.add("address");
        const placesButton = document.createElement("button");

        title.textContent = place.name;
        description.textContent = place.description;
        address.textContent = place.address;
        placesButton.textContent = `Learn More`;

        figure.setAttribute("src", place.image);
        figure.setAttribute("width", 400);
        figure.setAttribute("alt", place.description);
        figure.setAttribute("height", 300);
        figure.setAttribute("loading", "lazy");

        card.appendChild(figure);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(address);
        card.appendChild(placesButton);

        placesContainer.appendChild(card);

    })
}

getPlacesInfo();

// Local Storage

const currentVisit = Date.now();
const lastVisit = localStorage.getItem("lastVisit");
const welcomeMessage = document.querySelector("#welcome-message");

const text = document.createElement("h2");

if (!lastVisit) {
    text.textContent = "Welcome! Let us know if you have any questions!";
}

else {
    const timeDifference = currentVisit - lastVisit;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference < 1) {
        text.textContent = "Back so soon! Awesome!";
    }
    else {
        text.textContent = `You last visited ${daysDifference} day${daysDifference > 1 ? 's' : ''} ago.`;
    }
}

welcomeMessage.appendChild(text);
localStorage.setItem('lastVisit', currentVisit);