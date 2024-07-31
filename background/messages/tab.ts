import type { PlasmoMessaging } from "@plasmohq/messaging"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
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
  }
}

export default handler
