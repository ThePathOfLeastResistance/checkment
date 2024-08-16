import type { PlasmoCSConfig, PlasmoGetStyle } from "plasmo";
import { useEffect, useRef, useState } from "react";

// should I add auto prefizer for css
// https://tailwindcss.com/docs/browser-support#vendor-prefixes

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
    <div className="px-32 pt-8 bg-[#F1F6F9] h-screen	w-screen">
      <h3 className="text-lg text-black">Tittle:</h3>
      <h2 className="my-1 text-4xl text-black">My Final English Essay</h2>
      <div className="flex my-8">
        <div className="inline-block mr-4">
          <h3 className="text-lg">Editors:</h3>
          <div className="flex flex-row my-2" role="group">
            <div className="flex flex-row items-center px-2 py-1 mr-1 border-2 border-black rounded">
              <svg height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                <circle r="8" cx="9" cy="9" fill="#8BCC22" />
              </svg>
              <h2 className="mx-1 text-base ">James Cao</h2>
            </div>
          </div>
        </div>
        <div className="inline-block mx-4">
          <h3 className="text-lg">Plaing Speed:</h3>
          <div className="block my-2 rounded shadow-sm" role="group">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 "
            >
              1
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100"
            >
              1.5
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100"
            >
              2
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100"
            >
              3
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100"
            >
              5
            </button>
          </div>
        </div>
      </div>
      <div className="flex my-2">
        <div className="inline-block mr-4">
          <button className="flex flex-row items-center px-3 py-1 rounded outline outline-2 ">
            {" "}
            <svg
              width="11"
              height="13"
              viewBox="0 0 11 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1"
            >
              <path
                d="M10.5 5.63398C11.1667 6.01888 11.1667 6.98113 10.5 7.36603L2.25 12.1292C1.58333 12.5141 0.75 12.0329 0.75 11.2631L0.75 1.73686C0.75 0.967059 1.58333 0.485935 2.25 0.870835L10.5 5.63398Z"
                fill="black"
              />
            </svg>
            <h2 className="text-base ">Play</h2>
          </button>
        </div>

        <div className="flex w-full">
          <label
            htmlFor="customRange1"
            className="inline-block mb-2 text-neutral-700 dark:text-neutral-200"
          >
            Example range
          </label>
          <input
            type="range"
            className="w-full h-6 border-transparent rounded-lg appearance-none cursor-pointer transparent bg-neutral-200"
            id="customRange1"
            min={0}
            max={10000}
            step={1}
            value={0}
          />
        </div>
      </div>
    </div>
  );
};

export default DeltaFlyerPage;
