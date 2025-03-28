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

// Timestamp
document.getElementById("timestamp").value = new Date().toISOString();

// Membership Levels
const membership = 'data/membership.json';
const goldMember = document.querySelector("#gold");
const silverMember = document.querySelector("#silver");
const bronzeMember = document.querySelector("#bronze");
const npMember = document.querySelector("#np-member");
const membershipDetails = document.querySelector("#membership-details");

async function getMemberInfo() {

    const response = await fetch(membership);
    const data = await response.json();

    return data.levels;
}

displayMembershipDetails = (level) => {

    membershipDetails.innerHTML = "";

    const title = document.createElement("h1");
    const description = document.createElement("p");
    const publicity = document.createElement("p");
    const benefits = document.createElement("ul");
    const memberButton = document.createElement("button");
    memberButton.classList.add("close-button");

    title.innerHTML = level.title;
    description.innerHTML = level.description;
    publicity.innerHTML = `Publicity: ${level.publicity}`;

    level.benefits.forEach(benefit => {
        const benefitLi = document.createElement("li");
        benefitLi.innerHTML = benefit;
        benefits.appendChild(benefitLi);
    })

    memberButton.innerHTML = "X"

    membershipDetails.appendChild(title);
    membershipDetails.appendChild(description);
    membershipDetails.appendChild(publicity);
    membershipDetails.appendChild(benefits);
    membershipDetails.appendChild(memberButton);
    
    memberButton.addEventListener("click", () => {
        membershipDetails.close();
    })

    membershipDetails.showModal();

}

goldMember.addEventListener("click", async () => {
    const levels = await getMemberInfo();
    const goldLevel = levels.find(level => level.title === "Gold");
    displayMembershipDetails(goldLevel);
})

silverMember.addEventListener("click", async () => {
    const levels = await getMemberInfo();
    const silverLevel = levels.find(level => level.title === "Silver");
    displayMembershipDetails(silverLevel);
})

bronzeMember.addEventListener("click", async () => {
    const levels = await getMemberInfo();
    const bronzeLevel = levels.find(level => level.title === "Bronze");
    displayMembershipDetails(bronzeLevel);
})

npMember.addEventListener("click", async () => {
    const levels = await getMemberInfo();
    const npLevel = levels.find(level => level.title === "NP (Non-Profit)");
    displayMembershipDetails(npLevel);
})