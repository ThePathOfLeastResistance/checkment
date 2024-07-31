import styleText from "data-text:./replay.module.css"
import type { PlasmoCSConfig, PlasmoGetStyle } from "plasmo"
import { useEffect, useState } from "react"

import * as style from "./replay.module.css"

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = styleText
  return style
}

export default function DeltaFlyerPage() {
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Background script received a message:", request)
    sendResponse({ message: "Background script has received the message" })
  })

  let [message, setMessage] = useState()
  let [data, setData] = useState()
  let [flags, setFlags] = useState()

  console.log("Background script is running")
  return (
    <div className={style.bodyStyle}>
      <h3>Tittle:</h3>
      <h2>{}</h2>
      <div>
        <div>
          <h3>Editors:</h3>
          <h2>{}</h2>
        </div>
        <div>
          <h3>Plaing Speed:</h3>
          <h2>{}</h2>
        </div>
      </div>
      <div>
        <button>Play</button>
        <h1>scroll</h1>
      </div>
      <div>
        <div>
          <h3>Time:</h3>
          <h2>{}</h2>
        </div>
        <div>
          <h3>Flags:</h3>
          <h2>{}</h2>
        </div>
      </div>
    </div>
  )
}
