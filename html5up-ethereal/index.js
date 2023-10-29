const counter = document.querySelector(".counter-number");
async function updateCounter() {
    // let response = await fetch(
    //     "https://7i47v7p4g1.execute-api.us-east-1.amazonaws.com/cloud-resume"
    // );
    // let data = await response.json();
    counter.innerHTML = `👀 Views: 5`;
}
updateCounter();