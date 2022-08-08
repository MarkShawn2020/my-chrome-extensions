let changeColor = document.getElementById("changeColor")

chrome.storage.sync.get("color", ({ color }) => {
    changeColor.style.backgroundColor = color
})

changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    })
    // alert(`the tab id: ${tab.id}`)
    console.log("tab id: " + tab.id)
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setPageBackgroundColor
    })
})


function setPageBackgroundColor() {
    console.log("setting backgroundColor")
    chrome.storage.sync.get('color', ({ color }) => {
        console.log("setting color to " + color)
        document.body.style.backgroundColor = color
    })
}