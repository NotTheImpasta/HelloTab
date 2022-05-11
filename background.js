chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        if (message.msg == 'load') {
            load();
            sendResponse(true);
        } else if (message.msg == 'save') {
            save();
            sendResponse(true);
        } else if (message.msg == 'view') {
            view();
            sendResponse(true);
        } else if (message.msg == 'find') {
            find();
            sendResponse(true);
        }
        sendResponse(true);
    }
);

function load() {
    chrome.storage.sync.get(['tabs'], function(tabs) {
        tabs['tabs'].forEach(tab => {
            if (tab.url != undefined)
            chrome.tabs.create({
                active: false,
                pinned: tab.pinned,
                url: tab.url
            });
        });
    });
}

function save() {
    chrome.tabs.query({currentWindow: true}, function(tabs) {
        chrome.storage.sync.set({tabs: tabs}, function() {
        });
    });
}

function view() {
    chrome.tabs.create({
        url: 'tabs.html'
    });
}

function find() {
    chrome.tabs.query({active: true, currentWindow: true}, function(result) {
        var tab = result[0];
        chrome.storage.sync.get(['tabs'], function(tabs) {
            chrome.tabs.sendMessage(tab.id, {tabs: tabs['tabs']}, response => {});
        });
    });
}