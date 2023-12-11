chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    // received the data from content script
    chrome.storage.sync.set({ "last_click": message.target.xpath }, function(){
        //  A data saved callback omg so fancy
    });    
});

chrome.commands.onCommand.addListener((command, tab) => {
    if (command === "click-link-1") {
        chrome.tabs.sendMessage(tab.id, { action: "clickLink1" });
    }
  });