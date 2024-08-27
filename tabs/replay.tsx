import type { PlasmoCSConfig, PlasmoGetStyle } from "plasmo";
import { useEffect, useRef, useState } from "react";

// when I reload, everything is blank ????
// should I add auto prefizer for css
// https://tailwindcss.com/docs/browser-support#vendor-prefixes
// the delay does not work

import "../style.css";

const DeltaFlyerPage = () => {
  const [message, setMessage] = useState();
  const [data, setData] = useState(null);
  const [flags, setFlags] = useState(null);
  const [mapping, setmap] = useState(null);
  const [inputValue, setinputValue] = useState(0);
  const [arrayW, setArray] = useState([]);
  const [delay, setDelay] = useState(2000);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = "#F1F6F9";

    return () => {
      document.body.style.backgroundColor = "transparent";
    };
  });
  console.log(status);
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Background script received a message:", request);

    setMessage(request.message);
    setData(request.data);
    setFlags(Object.entries(request.flags));
    setmap(Object.entries(request.map));
  });

  useEffect(() => {
    if (message && status) {
      const interval = setInterval(() => {
        setinputValue((inputValue) => {
          const newValue = inputValue + 1;
          console.log(
            "This will run every second!",
            inputValue,
            data[inputValue]
          );
          setArray((prevArray) => [...prevArray, data[inputValue]]);
          return newValue;
        });
      }, 500);
      return () => clearInterval(interval);
    }
  }, [message, status]);
  console.log("Background script is running");
  return (
    <div className="w-screen h-screen px-20 pt-14">
      <div className="flex flex-row my-4">
        <div className="inline-block mr-4">
          <h3 className="text-lg text-black">Tittle:</h3>
          <h2 className="text-4xl text-black ">My Final English Essay</h2>
        </div>
        <div className="inline-block mx-4 ml-20">
          <h3 className="text-lg">Editors:</h3>
          <div className="flex flex-row my-2" role="group">
            {message ? (
              mapping.map((item) => (
                <div className="flex flex-row items-center px-2 py-1 mr-1 border-2 border-black rounded">
                  <svg
                    height="18"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle r="8" cx="9" cy="9" fill={item[1]["color"]} />
                  </svg>
                  <h2 className="mx-1 text-base ">{item[1]["name"]}</h2>
                </div>
              ))
            ) : (
              <h1 className="text-base">None</h1>
            )}
          </div>
        </div>
        <div className="inline-block mx-4">
          <h3 className="text-lg">Plaing Speed:</h3>
          <div className="block my-2 rounded shadow-sm" role="group">
            <button
              type="button"
              onClick={() => setDelay(1000)}
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 "
            >
              1
            </button>
            <button
              onClick={() => setDelay(1500)}
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100"
            >
              1.5
            </button>
            <button
              onClick={() => setDelay(2000)}
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100"
            >
              2
            </button>
            <button
              type="button"
              onClick={() => setDelay(3000)}
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100"
            >
              3
            </button>
            <button
              type="button"
              onClick={() => setDelay(5000)}
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100"
            >
              5
            </button>
          </div>
        </div>
      </div>
      <div className="flex my-2 align-middle">
        <div className="inline-block mr-4">
          <button className="flex flex-row items-center px-2 py-1 rounded outline outline-2 ">
            {" "}
            <svg
              width="11"
              height="13"
              viewBox="0 0 11 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1"
            >
              <path
                d="M10.5 5.63398C11.1667 6.01888 11.1667 6.98113 10.5 7.36603L2.25 12.1292C1.58333 12.5141 0.75 12.0329 0.75 11.2631L0.75 1.73686C0.75 0.967059 1.58333 0.485935 2.25 0.870835L10.5 5.63398Z"
                fill="black"
              />
            </svg>
            <h2
              className="text-sm"
              onClick={() => {
                setStatus(true);
              }}
            >
              Play
            </h2>
          </button>
        </div>
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="customRange1"
            className="inline-block mb-2 text-neutral-700 dark:text-neutral-200"
          ></label>
          <input
            type="range"
            className="w-full h-4 border-transparent rounded appearance-none cursor-col-resize transparent bg-[#9BA4B5]"
            id="customRange1"
            min={0}
            max={message ? data.length : 0}
            value={inputValue}
          />
        </div>
      </div>
      <div className="flex flex-row mt-4 ">
        <div className="flex flex-col items-center w-3/4 mr-5 overflow-auto min-w-[836px] h-[600px]">
          <div className="shrink-0 flex mt-8 bg-white border-2 h-[1056px] w-[816px]">
            <div className="px-20 py-20 w-[816px] text-base">
              {message && status ? (
                arrayW.map((item) => (
                  <p className="inline-block">{item["text"]}</p>
                ))
              ) : (
                <p> </p>
              )}
            </div>
          </div>
          <div className="shrink-0 flex mt-8 bg-white border-2 h-[1056px] w-[816px]">
            Tearing open my fifth packet of cookies, I devour them while staring
            blankly at the screen. Before me, a laptop spewing forth a jumble of
            words and symbols, which combine to form error code. To many it may
            seem alien, but to me, the words point to the failure of my code. As
            I stay glued to my chair, I ponder the reasons for this error.
            Having only learned this programming language an hour ago, my mind
            overflows with different theoretical possibilities. Reading over the
            error message, I glanced over the clock only to realize my estimate
            of time was off, by three folds, I started learning this language 3
            hours ago. In an attempt to make sense of this discovery, I
            contemplate the past events, as if I could somehow recover time from
            this retrospecrtion. Before I could think further, my mind snapped
            back to the laptop as it wanted to know why, why the code failed. 
            The morning sun, emitting light, interacted with dew-covered grass,
            resulting in a golden hue across the meadow. Birds produced melodic
            sounds, synchronized with the rustling of leaves on ancient oak
            trees. A rabbit appeared from behind a bush, its nose moving as it
            observed the surroundings. In proximity, a brook produced a soft
            babbling sound, its clear waters reflecting the sky. The scene
            represented a moment of serenity, where
          </div>
        </div>
        <div className="flex-col w-1/4 h-full">
          {message && flags.length != 0 ? (
            flags.map((item) => (
              <div className="flex-col w-full p-4 my-4 bg-white border-2 border-black rounded text-pretty">
                <svg
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                  className="mb-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.90692 11.7602C7.52803 12.4754 6.5008 12.4677 6.13269 11.7469L0.882767 1.46724C0.541462 0.798944 1.03047 0.00680816 1.78085 0.0124398L12.4344 0.0923944C13.1848 0.098026 13.6618 0.897412 13.3105 1.56051L7.90692 11.7602Z"
                    fill="#FF0000"
                  />
                </svg>
                <h2 className="text-base break-words">{item[1]["text"]}</h2>
              </div>
            ))
          ) : (
            <h1>none</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeltaFlyerPage;
