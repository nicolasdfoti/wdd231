const currentYear = document.querySelector("#currentYear");
const lastUpdated = document.querySelector("#lastUpdated");
const today = new Date();

currentYear.innerHTML = `&copy; ${today.getFullYear()} - Nicolás Foti`;
lastUpdated.innerHTML = `Last Modified: ${document.lastModified}`;