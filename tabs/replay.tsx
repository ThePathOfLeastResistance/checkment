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
      <h3 className="text-xl text-black">Tittle:</h3>
      <h2 className="my-1 text-4xl text-black">My Final English Essay</h2>
      <div className="flex my-2">
        <div className="inline-block mr-4">
          <h3 className="text-xl">Editors:</h3>
          <div className="block my-1" role="group">
            <div className="flex px-2 py-1 mx-1 align-middle border-2">
              <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                <circle r="7" cx="8" cy="8" fill="#8BCC22" />
              </svg>
              <h2 className="mx-1">James Cao</h2>
            </div>
            <div className="flex px-2 py-1 align-middle border-2 ">
              <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                <circle r="7" cx="8" cy="8" fill="#2299CC" />
              </svg>
              <h2 className="mx-1">Jerry Joe</h2>
            </div>
          </div>
        </div>
        <div className="inline-block mx-4">
          <h3 className="text-xl">Plaing Speed:</h3>
          <div className="block my-1 rounded-md shadow-sm" role="group">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 "
            >
              Profile
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100"
            >
              Settings
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100"
            >
              Messages
            </button>
          </div>
        </div>
      </div>
      <div className="flex my-2">
        <div className="inline-block h-4 mr-4">
          <button className="flex-row p-2 align-middle outline outline-2 ">
            {" "}
            <svg
              width="11"
              height="13"
              viewBox="0 0 11 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 5.63398C11.1667 6.01888 11.1667 6.98113 10.5 7.36603L2.25 12.1292C1.58333 12.5141 0.75 12.0329 0.75 11.2631L0.75 1.73686C0.75 0.967059 1.58333 0.485935 2.25 0.870835L10.5 5.63398Z"
                fill="black"
              />
            </svg>
            Play
          </button>
        </div>
        <div className="inline-block h-4 mr-4">
          <input type="range" className="flex w-full" />
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
