chrome.storage.sync.get("css", function(data) {
    if (data.css) {
      var style = document.createElement("style");
      style.innerHTML = data.css;
      document.head.appendChild(style);
    }
  });
  
  chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action == "updateStyles") {
      var style = document.createElement("style");
      style.innerHTML = message.styles;
      document.head.appendChild(style);
      chrome.storage.sync.set({ "css": message.styles });
    }
  });