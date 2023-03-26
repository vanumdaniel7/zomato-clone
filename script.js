const orderOnlineButton =  document.getElementById("orderOnlineButton");
const reviewsButton = document.getElementById("reviewsButton");
const highlightLine = document.getElementById("highlightLine");
const orderOnlineDiv = document.getElementById("orderOnlineDiv");
const reviewsDiv = document.getElementById("reviewsDiv");

orderOnlineButton.addEventListener("click", () => {
    orderOnlineButton.classList.remove("inactive");
    orderOnlineButton.classList.add("active");
    reviewsButton.classList.add("inactive");
    reviewsButton.classList.remove("active");
    highlightLine.classList.remove("review");
    highlightLine.classList.add("orderOnline");
    orderOnlineDiv.classList.add("activeContent");
    orderOnlineDiv.classList.remove("inactiveContent");
    reviewsDiv.classList.remove("activeContent");
    reviewsDiv.classList.add("inactiveContent");
});

reviewsButton.addEventListener("click", () => {
    reviewsButton.classList.remove("inactive");
    reviewsButton.classList.add("active");
    orderOnlineButton.classList.add("inactive");
    orderOnlineButton.classList.remove("active");
    highlightLine.classList.add("review");
    highlightLine.classList.remove("orderOnline");
    reviewsDiv.classList.add("activeContent");
    reviewsDiv.classList.remove("inactiveContent");
    orderOnlineDiv.classList.remove("activeContent");
    orderOnlineDiv.classList.add("inactiveContent");
});