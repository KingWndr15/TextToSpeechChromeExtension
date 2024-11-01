document.getElementById("read-button").addEventListener("click", () => {
  const text = document.getElementById("text-input").value;
  if (text) {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  }
});
