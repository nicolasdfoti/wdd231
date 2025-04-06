// Toggle Nav Button

const hamButton = document.querySelector("#hamburgerButton");
const nav = document.querySelector("nav");

hamButton.addEventListener("click", () => {
    nav.classList.toggle("open");
    hamButton.classList.toggle("open");
})

