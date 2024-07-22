import type { PlasmoMessaging } from "@plasmohq/messaging"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const message = await req.body.message
  const data = await req.body.data
  const flags = await req.body.flags
  if (message) {
    chrome.tabs.create({
      url: "./tabs/replay.html"
    })
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const { id } = tabs[0]
      chrome.scripting.executeScript({
        target: { tabId: id },
        func: () => {
          const iframe = document.createElement("iframe")
          iframe.src = chrome.runtime.getURL("/tabs/replay.html")
          iframe.name = "replay"
          document.body.appendChild(iframe)
          chrome.tabs.sendMessage(id, {
            type: "TRANSFER_DATA",
            data: data,
            flags: flags
          })
        }
      })
    })
  }
}

export default handler
