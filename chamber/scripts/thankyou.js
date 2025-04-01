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

// Get user Info

const thankYou = document.querySelector("#thankyou");

const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

console.log(myInfo.get("fname"));


thankYou.innerHTML = `
    <h1>Thank you, ${myInfo.get("fname")}!</h2>

    <div id="thankyou-info">

    <h2>Your information:</h2>
    <p>Your name: ${myInfo.get("fname")} | Last name: ${myInfo.get("lname")}</p>

    <h2>Your contact information:</h2>
    <p>Your email: ${myInfo.get("email")} | Phone: ${myInfo.get("phone")}</p>

    <h2>Your company information:</h2>
    <p>Your organization title: ${myInfo.get("company")} | Your organization name: ${myInfo.get("organization")}</p>

    <h2>Relevant Information</h2>
    <p>Your membership level: ${myInfo.get("select")} | Your description: ${myInfo.get("description")}</p>

    <h2>Submission Date:</h2>
    <p>${new Date(myInfo.get("timestamp")).toLocaleString()}</p>

    </div>
`;