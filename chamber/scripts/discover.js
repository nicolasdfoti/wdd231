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
        console.log("There was an error with the JSON file!");
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
        const address = document.createElement("p");
        const placesButton = document.createElement("button");

        title.textContent = place.name;
        description.textContent = place.description;
        address.textContent = place.address;
        placesButton.textContent = `More information`;

        figure.setAttribute("src", place.image);
        figure.setAttribute("width", 300);
        figure.setAttribute("alt", place.description);
        figure.setAttribute("height", 300);
        figure.setAttribute("loading", "lazy");

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(address);
        card.appendChild(figure);
        card.appendChild(placesButton);

        placesContainer.appendChild(card);

    })
}

getPlacesInfo();

// Local Storage

