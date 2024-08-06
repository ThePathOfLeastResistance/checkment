import styleText from "data-text:./replay.module.css"
import type { PlasmoCSConfig, PlasmoGetStyle } from "plasmo"
import { useEffect, useRef, useState } from "react"

import * as style from "./replay.module.css"

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = styleText
  return style
}

export default function DeltaFlyerPage() {
  const [message, setMessage] = useState()
  const [data, setData] = useState()
  const [flags, setFlags] = useState()
  const [map, setmap] = useState()
  const [sliderRange, setSliderRange] = useState()
  const [inputValue, setInputValue] = useState()
  const sliderRef = useRef(null)
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Background script received a message:", request)
  })
  console.log("Background script is running")
  return (
    <div className={style.bodyStyle}>
      <h3 style={style.sideStyle}>Tittle:</h3>
      <h2 style={style.headingStyle}>{}</h2>
      <div>
        <div>
          <h3 style={style.sideStyle}>Editors:</h3>
          <h2 style={style.headingStyle}>{}</h2>
        </div>
        <div>
          <h3 style={style.sideStyle}>Plaing Speed:</h3>
          <h2>{}</h2>
        </div>
      </div>
      <div>
        <button> Play</button>
        <div className="Ranger-slider"></div>
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
