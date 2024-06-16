console.log(`background.ts working`)

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(message)
  if (message.action === "opentab") {
    console.log(`test command:`)
  }
})
