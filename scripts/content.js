// document.addEventListener("click_from_page", function(e) {
//     chrome.runtime.sendMessage(e.data);
// });

document.body.addEventListener('click', function(e) {
    // Create a simple, serializable object from the event.
    const message = {
        // You can include other serializable properties as needed.
        type: e.type,
        target: {
            id: e.target.id,       // Example property: ID of the clicked element
            className: e.target.className, // Example property: class of the clicked element
            tagName: e.target.tagName, // Example property: tag name of the clicked element
        },
        // Include any other properties that you might need and are serializable.
    };
    chrome.runtime.sendMessage(message);  
});