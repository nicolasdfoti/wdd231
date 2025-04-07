// Toggle Nav Button

const hamButton = document.querySelector("#hamburgerButton");
const nav = document.querySelector("nav");

hamButton.addEventListener("click", () => {
    nav.classList.toggle("open");
    hamButton.classList.toggle("open");
})

// News Section

const sectionsContainer = document.querySelector("#latest-sections");
const jsonFile = 'data/news.json';

async function getNewsData() {
    const response = await fetch(jsonFile);
    const data = await response.json();
    displayNewsInfo(data);
    console.log(data);
}

function displayNewsInfo(data) {

    data.forEach(newsItem => {

        // Section Items
        const section = document.createElement("section");
        const title = document.createElement("h2");
        const image = document.createElement("img");
        const button = document.createElement("button");
    
        title.innerHTML = newsItem.title;
        image.setAttribute("src", newsItem.image);
        image.setAttribute("width", 300);
        image.setAttribute("loading", "lazy");
        button.innerHTML = "Read more here!";
    
        section.appendChild(title);
        section.appendChild(image);
        section.appendChild(button);
        sectionsContainer.appendChild(section);

        // Dialog Items
        const dialogContainer = document.createElement("dialog");
        const dialogTitle = document.createElement("h2");
        const dialogImage = document.createElement("img");
        const dialogDescription = document.createElement("p");
        const dialogButton = document.createElement("button");
        dialogButton.classList.add("close-button");

        dialogTitle.innerHTML = newsItem.title;
        dialogImage.setAttribute("src", newsItem.image)
        dialogDescription.innerHTML = newsItem.description;
        dialogButton.innerHTML = "Close";

        dialogContainer.appendChild(dialogTitle);
        dialogContainer.appendChild(dialogImage);
        dialogContainer.appendChild(dialogDescription);
        dialogContainer.appendChild(dialogButton);

        sectionsContainer.appendChild(dialogContainer);

        button.addEventListener("click", () => {
            dialogContainer.showModal();
        })

        dialogButton.addEventListener("click", () => {
            dialogContainer.close();
        })
    })
    
}

getNewsData();