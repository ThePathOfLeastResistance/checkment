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
      <h2 className="text-black text-7xl">My Final English Essay</h2>
      <div className="flex mr-4">
        <div className="inline-block h-8 mr-4">
          <h3 className="text-xl">Editors:</h3>
          <div className="px-2 py-1 space-x-4">
            <svg height="32" width="32" xmlns="http://www.w3.org/2000/svg">
              <circle r="15" cx="16" cy="16" fill="red" />
            </svg>
          </div>
        </div>
        <div className="inline-block h-8 mx-4">
          <h3 className="text-xl">Plaing Speed:</h3>

          <div className="block rounded-md shadow-sm" role="group">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              Profile
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              Settings
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              Messages
            </button>
          </div>
        </div>
      </div>
      <div className="flex my-4">
        <div className="inline-block h-4 mr-4 row">
          <button className="p-2 outline outline-2 ">
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
