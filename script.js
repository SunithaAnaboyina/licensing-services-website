const button = document.getElementById("get-started");
const mainPage = document.getElementById("main-page");
const welcomePage = document.getElementById("welcome-page");

button.addEventListener("click", () => {
    // Animate button only
    button.classList.add("clicked");

    // Wait a moment, then switch to the welcome page
    setTimeout(() => {
        mainPage.classList.add("hidden");
        welcomePage.classList.remove("hidden");
    }, 800);
});

