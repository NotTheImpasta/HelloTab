document.getElementById("load").onclick = function() {
    chrome.runtime.sendMessage({ msg: "load" }, response => {
        alert('Tabs loaded!');
    });
}

document.getElementById("save").onclick = function() {
    chrome.runtime.sendMessage({ msg: "save" }, response => {
        alert('Tabs saved!');
    });
}

document.getElementById("view").onclick = function() {
    chrome.runtime.sendMessage({ msg: "view" }, response => {});
}