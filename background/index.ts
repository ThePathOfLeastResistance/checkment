export {}

console.log(
  "Live now; make now always the most precious time. Now will never come again."
)

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Received message:", message)

  if (message.type === "GREETINGS") {
    sendResponse({ message: "Hello from the background script!" })
  }
})
