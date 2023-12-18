// background.js

chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed.');
});

chrome.runtime.onStartup.addListener(() => {
    console.log('Extension started.');
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'fetchData') {
        // Call your fetchData function here or send a message to the content script to initiate the fetch
    }
});
