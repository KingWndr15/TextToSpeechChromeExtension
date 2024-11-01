document.getElementById("speakBtn").addEventListener("click", async () => {
  // Get the selected text in the active tab
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id },
      func: getSelectedText,
    },
    (result) => {
      const selectedText = result[0].result;
      if (selectedText) {
        // Use Chrome's Text-to-Speech API to read the selected text
        chrome.tts.speak(selectedText, { rate: 1.0 });
      } else {
        alert("No text selected!");
      }
    }
  );
});

// Function to run in the active tab to get selected text
function getSelectedText() {
  return window.getSelection().toString();
}
