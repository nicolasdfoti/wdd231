// Last Modified

const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;

// Get Data from JSON

const members = 'data/members.json';

async function getMemberData() {

    const response = await fetch(members);
    const data = await response.json();

    displayMembers(data.members);
    return data.members;
}

// Display Members info

const businessCard = document.querySelector(".business-cards");

const displayMembers = (members) => {

    members.forEach(member => {

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

        fullName.innerHTML = `${member.name}`;

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

        businessCard.appendChild(memberCard);
    })
}

getMemberData();

// Toggle buttons

const hamButton = document.querySelector("#hamButton");
const navigation = document.querySelector("nav");

hamButton.addEventListener("click", () => {
    hamButton.classList.toggle("open");
    navigation.classList.toggle("open");
})

const listButton = document.querySelector("#list");

listButton.addEventListener("click", () => {
    businessCard.classList.add("flex-view");
    businessCard.classList.remove("grid-view");
})

const gridButton = document.querySelector("#grid");

gridButton.addEventListener("click", () => {
    businessCard.classList.add("grid-view");
    businessCard.classList.remove("flex-view");
})