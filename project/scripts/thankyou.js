import { toggleNav } from "./utilities.js";

toggleNav();


// Get User info

const thankYouContainer = document.querySelector("#thankyou-div");
const myInfo = new URLSearchParams(window.location.search);

thankYouContainer.innerHTML = `
    <h1>Thank you, ${myInfo.get("firstname")}!</h2>

    <div id="thankyou-info">

        <h2>Your information:</h2>
        <p>Your name: ${myInfo.get("firstname")} | Last name: ${myInfo.get("lastname")}</p>

        <h2>Your contact information:</h2>
        <p>Your email: ${myInfo.get("email")} | Phone: ${myInfo.get("phone")}</p>

        <h2>Relevant Information</h2>
        <p>Your preferred communication method: ${myInfo.get("communication")} | Your improvements: ${myInfo.get("improvements")}</p>

    </div>
`;