// Use window.onload to confirm resources are loaded before hiding loading screen
window.onload = function() {
  // Hide loading screen
  var loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    loadingScreen.style.display = 'none';
  }
};

// Function to navigate to a new page
function navigateTo(page) {
  window.location.href = page;
}