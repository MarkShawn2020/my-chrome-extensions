
function copyText2Clipboard() {
    var focused = document.activeElement;
    var selectedText;
    if (focused) {
        try {
            selectedText = focused.value.substring(
                focused.selectionStart, focused.selectionEnd);
        } catch (err) {
        }
    }
    if (selectedText == undefined) {
        console.log('no selected text, then try to call another method')
        var sel = window.getSelection();
        var selectedText = sel.toString();
    }
    console.log("selected text: " + selectedText)
}


function initContentScript() {
    chrome.extension.onRequest.addListener((request) => {
        console.log("received request, handling: ", request)

        if (request["copy"] !== undefined) {
            console.log("received request of copy")
            if (!document.hasFocus()) {
                console.log("document doesn't have focus.")
            } else {
                console.warn("document has focus, coping...")
                copyText2Clipboard()

            }

        } else {
            console.error("undefined request: " + request)
        }
    })
}


initContentScript()