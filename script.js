function navigateTo(page) {
    window.location.href = page;
}

// SIMULATE LOADING
setTimeout(function) {
    //HIDE LOADER
    document.getElementById('loader-wrapper').style.display = 'none';
    //SHOW MAIN CONTENT
    document.getElementById('content').style.display = 'block';
}, 2000);
