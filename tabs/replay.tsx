import type { PlasmoCSConfig, PlasmoGetStyle } from "plasmo";
import { useEffect, useRef, useState } from "react";

import "../style.css";

const DeltaFlyerPage = () => {
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
    <div className="px-32 py-4 bg-[#F1F6F9] h-screen	w-screen">
      <h3 className="text-base text-black">Tittle:</h3>
      <h2 className="text-xl text-black">{}</h2>
      <div className="flex">
        <div className="inline-block h-8 my-4">
          <h3>Editors:</h3>
          <h2>{}</h2>
        </div>
        <div className="inline-block h-8 mx-4">
          <h3>Plaing Speed:</h3>
          <h2>{}</h2>
        </div>
      </div>
      <div className="flex">
        <div className="inline-block h-4 mx-4">
          <button className="px-2 py-3 outline outline-2 ">Play</button>
        </div>
        <div className="inline-block h-4 mx-4">
          <h3>Plaing Speed:</h3>
        </div>
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
};

export default DeltaFlyerPage;
