chrome.runtime.sendMessage({ msg: "find" }, response => {});

chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        const tabs = message['tabs'];
        sendResponse(true);
        const container = document.getElementById("tabs");
        console.log(tabs);
        tabs.forEach(tab => {
            console.log(tab);
            container.innerHTML += `<li><strong>${tab.title}</strong>: <a href='${tab.url || ''}'>${tab.url || '(no url)'}</a></li>`;
        });
    }
);
