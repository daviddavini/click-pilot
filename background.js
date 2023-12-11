chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    // received the data from content script
    console.log(message, sender, sendResponse);
});