const currentYear = document.querySelector("#currentYear");
const lastUpdated = document.querySelector("#lastUpdated");
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

const today = new Date();

currentYear.innerHTML = `&copy;${today.getFullYear()} - Nicolás Foti`;
lastUpdated.innerHTML = `Last Modified: ${document.lastModified}`;

hamButton.addEventListener("click", () => {
    hamButton.classList.toggle("open");
    navigation.classList.toggle("open");
})