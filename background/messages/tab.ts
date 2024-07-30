import type { PlasmoMessaging } from "@plasmohq/messaging"

console.log("Background script is running")
console.log(chrome.scripting)
console.log("Background script is running")
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  chrome.permissions.contains(
    {
      permissions: ["tabs"]
    },
    (result) => {
      if (result) {
        console.log("Permission granted")
      } else {
        console.log("Permission denied")
      }
    }
  )

  const message = await req.body.message
  const data = await req.body.data
  const flags = await req.body.flags
  fetch("/manifest.json")
    .then((_) => _.text())
    .then((_) => console.log(_))

  if (message) {
    chrome.tabs.create({
      url: "./tabs/replay.html"
    })
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const { id } = tabs[0]
      console.log(chrome.scripting)
      chrome.scripting.executeScript({
        target: { tabId: id },
        func: () => {
          const iframe = document.createElement("iframe")
          iframe.src = chrome.runtime.getURL("/tabs/replay.html")
          iframe.name = "replay"
          document.body.appendChild(iframe)
        }
      })
      chrome.tabs.onUpdated.addListener(function listener(updatedTabId, info) {
        if (updatedTabId === id && info.status === "complete") {
          chrome.scripting.executeScript({
            target: { tabId: id },
            func: (data) => {
              window.postMessage({ type: "MY_DATA", payload: data }, "*")
            },
            args: [data]
          })

          chrome.tabs.onUpdated.removeListener(listener)
        }
      })
    })
  }
}

export default handler
