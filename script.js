// Check if the page has been loaded before
const pageLoadedBefore = sessionStorage.getItem("pageLoadedBefore");

// If the page has not been loaded before, show the preloader
if (!pageLoadedBefore) {
    document.addEventListener("DOMContentLoaded", function () {
        // Fade out the preloader
        setTimeout(function () {
            document.getElementById("preloader").style.opacity = "0";
            document.getElementById("content").style.display = "block";
        }, 2000); // You can adjust the delay time as needed

        // Set a flag in sessionStorage to indicate that the page has been loaded
        sessionStorage.setItem("pageLoadedBefore", true);
    });
} else {
    // If the page has been loaded before, simply display the content
    document.getElementById("preloader").style.display = "none";
    document.getElementById("content").style.display = "block";
}


// Function to navigate to a new page
function navigateTo(page) {
    window.location.href = page;
}


// Bio typing out animation
const text = "Front-End Developer committed to crafting thoughtful solutions. Thriving in team environments, always seeking ways to push boundaries and learn something new. Progress is my constant goal, with each project a step forward."
let index = 0;

function typewriter() {
    if (index < text.length) {
        document.getElementById("dynamic-text").innerHTML += text.charAt(index);
        index++
        setTimeout(typewriter, 35);
    }
}

window.onload = typewriter;