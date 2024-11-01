chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "read-text",
    title: "Read selected text",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "read-text" && info.selectionText) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: readText,
      args: [info.selectionText],
    });
  }
});

function readText(selectedText) {
  const utterance = new SpeechSynthesisUtterance(selectedText);
  speechSynthesis.speak(utterance);
}
