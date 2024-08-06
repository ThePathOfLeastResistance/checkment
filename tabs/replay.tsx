import type { PlasmoCSConfig, PlasmoGetStyle } from "plasmo";
import { useEffect, useRef, useState } from "react";

import cssText from "data-text:~style.css";

export const getStyle = () => {
  const style = document.createElement("style");
  style.textContent = cssText;
  return style;
};

export default function DeltaFlyerPage() {
  const [message, setMessage] = useState();
  const [data, setData] = useState();
  const [flags, setFlags] = useState();
  const [map, setmap] = useState();
  const [sliderRange, setSliderRange] = useState();
  const [inputValue, setInputValue] = useState();

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Background script received a message:", request);
  });
  console.log("Background script is running");
  return (
    <div>
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
        <button> Play</button>
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
  );
}
