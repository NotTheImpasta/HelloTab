document.getElementById("load").onclick = function() {
    chrome.runtime.sendMessage({ msg: "load" }, response => {
        document.getElementById("text").innerText = "Tabs loaded!";
    });
}

document.getElementById("save").onclick = function() {
    chrome.runtime.sendMessage({ msg: "save" }, response => {
        document.getElementById("text").innerText = "Tabs saved!";
    });
}

document.getElementById("view").onclick = function() {
    chrome.runtime.sendMessage({ msg: "view" }, response => {});
}