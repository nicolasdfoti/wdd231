// First Part

const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {

    const response = await fetch(url);
    const data = await response.json();

    // console.table(data);
    displayProphets(data.prophets);
    return data.prophets;
}

const displayProphets = (prophets) => {

    prophets.forEach(prophet => {

        const prophetCard = document.createElement("section");
        const fullName = document.createElement("h2");
        const birthDate = document.createElement("p");
        const birthPlace = document.createElement("p");
        const portrait = document.createElement("img");

        fullName.innerHTML = `${prophet.name} ${prophet.lastname}`;
        birthDate.innerHTML = `Birthdate: ${prophet.birthdate}`;
        birthPlace.innerHTML = `Birthplace: ${prophet.birthplace}`;
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of Prophet ${prophet.name} ${prophet.lastname}, ${prophet.order}th Latter-day President`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        prophetCard.appendChild(fullName);
        prophetCard.appendChild(birthDate);
        prophetCard.appendChild(birthPlace);
        prophetCard.appendChild(portrait);

        cards.appendChild(prophetCard);
    })
}


// Second Part

const all = document.querySelector("#all");
const utah = document.querySelector("#utah");
const outsideUtah = document.querySelector("#outside");
const years = document.querySelector("#years");
const children = document.querySelector("#children");
const service = document.querySelector("#service");

const getAgeAtDeathInYears = (birthdate, deathdate) => {
    const birthYear = parseInt(birthdate.split(" ")[2]);
    const deathYearNum = parseInt(deathdate.split(" ")[2]);
    return deathYearNum - birthYear;
}

const getProphets = async () => {

    let prophets = await getProphetData();

    all.addEventListener("click", () => {
        cards.innerHTML = "";
        displayProphets(prophets);
    })

    utah.addEventListener("click", () => {
        cards.innerHTML = "";
        const bornInUtah = prophets.filter(prophet => prophet.birthplace === "Utah");
        displayProphets(bornInUtah);
    })

    outsideUtah.addEventListener("click", () => {
        cards.innerHTML = "";
        const outside = prophets.filter(prophet => prophet.birthplace !== "Utah");
        displayProphets(outside);
    })

    years.addEventListener("click", () => {
        cards.innerHTML = "";
        
        const lifeYears = prophets.filter(prophet => {

            const birthYear = parseInt(prophet.birthdate.split(" ")[2]);
            const deathYear = prophet.death ? parseInt(prophet.death.split(" ")[2]) : new Date().getFullYear();
            return deathYear - birthYear >= 95;
            
        })
            
        displayProphets(lifeYears);
    })

    children.addEventListener("click", () => {
        cards.innerHTML = "";
        const childrenCount = prophets.filter(prophet => prophet.numofchildren >= 10);
        displayProphets(childrenCount);
    })

    service.addEventListener("click", () => {
        cards.innerHTML = "";
        const serviceYears = prophets.filter(prophet => prophet.length >= 15);
        displayProphets(serviceYears);
    })
}

getProphets();