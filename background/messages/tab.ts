import type { PlasmoMessaging } from "@plasmohq/messaging";

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const message = await req.body.message;
  const data = await req.body.data;
  const flags = await req.body.flags;
  const map = await req.body.map;

  if (message) {
    chrome.tabs.create(
      {
        url: "./tabs/replay.html",
      },
      (tab) => {
        chrome.tabs.onUpdated.addListener(function listener(tabId, info) {
          if (tabId === tab.id && info.status === "complete") {
            chrome.tabs.onUpdated.removeListener(listener);
            chrome.tabs.sendMessage(
              tab.id,
              { message: message, data: data, flags: flags, map: map },
              (response) => {
                console.log("Response from content script:", response);
              }
            );
          }
        });
      }
    );
  }
};

export default handler;
