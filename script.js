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
// Wait for 5 seconds before triggering the typing animation
setTimeout(function() {
    // Select the element with id 'bio'
    const bioElement = document.getElementById('bio');
    
    // Check if the element exists to avoid errors
    if (bioElement) {
        bioElement.style.borderRight = 'none'; // Remove the typing cursor
    } else {
        console.error("Element with id 'bio' not found.");
    }
}, 5000); // Delay time in milliseconds (5 seconds)


// Wait for 5 seconds before triggering the typing animation
setTimeout(function() {
    // Select the element with id 'heading'
    const headingElement = document.getElementById('heading');
    
    // Check if the element exists to avoid errors
    if (headingElement) {
        headingElement.style.borderRight = 'none'; // Remove the typing cursor
    } else {
        console.error("Element with id 'heading' not found.");
    }
}, 5000); // Delay time in milliseconds (5 seconds)