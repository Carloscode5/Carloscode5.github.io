function navigateTo(page) {
    window.location.href = page;
}

// SIMULATE LOADING
setTimeout(function() {
    // HIDE LOADER
    document.getElementById('loading-section').style.display = 'none';
    // SHOW MAIN CONTENT
    document.body.style.visibility = 'visibile';
}, 2000);

function navigateTo(page) {
    // SHOW LOADER BEFORE NAVIGATING TO MAIN CONTENT
    document.getElementById('loading-section').style.display = 'block';
    window.location.href = page;
}
