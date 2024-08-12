import { useReducer } from "react";

import "../style.css";

function IndexPopup() {
  const [count, increase] = useReducer((c) => c + 1, 0);

  return (
    <button
      onClick={() => increase()}
      type="button"
      className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Count:
      <span className="inline-flex items-center justify-center w-8 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
        {count}
      </span>
    </button>
  );
}

export default IndexPopup;

// import type { PlasmoCSConfig, PlasmoGetStyle } from "plasmo";
// import { useEffect, useRef, useState } from "react";

// import cssText from "data-text:~style.css";

// export const getStyle = () => {
//   const style = document.createElement("style");
//   style.textContent = cssText;
//   return style;
// };

// const DeltaFlyerPage = () => {
//   const [message, setMessage] = useState();
//   const [data, setData] = useState();
//   const [flags, setFlags] = useState();
//   const [map, setmap] = useState();
//   const [sliderRange, setSliderRange] = useState();
//   const [inputValue, setInputValue] = useState();

//   chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     console.log("Background script received a message:", request);
//   });
//   console.log("Background script is running");
//   return (
//     <div className="px-20">
//       <button
//         type="button"
//         className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//       >
//         Count:
//         <span className="inline-flex items-center justify-center w-8 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full"></span>
//       </button>
//       <h3 className="text-white">Tittle:</h3>
//       <h2>{}</h2>
//       <div>
//         <div>
//           <h3>Editors:</h3>
//           <h2>{}</h2>
//         </div>
//         <div>
//           <h3>Plaing Speed:</h3>
//           <h2>{}</h2>
//         </div>
//       </div>
//       <div>
//         <button> Play</button>
//       </div>
//       <div>
//         <div>
//           <h3>Time:</h3>
//           <h2>{}</h2>
//         </div>
//         <div>
//           <h3>Flags:</h3>
//           <h2>{}</h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DeltaFlyerPage;
