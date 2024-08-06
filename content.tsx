import { error } from "console";
import { report } from "process";
import { useEffect, useState } from "react";
import { render } from "react-dom";
// css
import type { PlasmoCSConfig, PlasmoGetStyle } from "plasmo";

import { createRoot } from "react-dom/client";
import { sendToBackground } from "@plasmohq/messaging";

import styleText from "data-text:./style.module.css";
import * as style from "./style.module.css";

export const getStyle = () => {
  const style = document.createElement("style");
  style.textContent = styleText;
  return style;
};

export const config: PlasmoCSConfig = {
  matches: ["https://docs.google.com/document/*"],
};

// function converTime(input: number) {
//   const data = new Date(input)
//   // console.log(data.toLocaleString())
//   ;("6/7/2024, 11:18:43 PM")
//   const date = data.toLocaleString().split(",")[0]
//   const timedata = data.toLocaleString().split(",")[1].split(" ")
//   const time = timedata[0].split(":").slice(0, 2) + timedata[1]
//   return [date, time]
// }

function addRevData(list, date, time, user, text, index) {
  list.push({
    date,
    time,
    user,
    text,
    index,
  });
}

function DocButon() {
  const [rev, changeRev] = useState(null);
  // this is the conidience for the user using chatgpt
  const [per, changePer] = useState([null, null]);
  const [flaglog, changeflag] = useState(null);
  const [tim, changetime] = useState(null);
  const [docdata, changeDocData] = useState("");
  const [tok, changeTok] = useState("");
  const [documentId, changeDocumentId] = useState("");
  const [map, changeMap] = useState("");

  useEffect(() => {
    const url = window.location.href;
    // console.log(typeof url)
    // console.log(document)
    const matching = url.match("/document/d/([^/]+)/");
    if (matching) {
      changeDocumentId(matching[1]);
      const targetNode = document.body;
      const config = { attributes: true };

      const callback = function (mutationsList, observer) {
        for (let mutation of mutationsList) {
          if (
            mutation.type === "attributes" &&
            mutation.attributeName === "tok"
          ) {
            // console.log("tok changed" + targetNode.getAttribute("tok"))
            const token = targetNode.getAttribute("tok");
            changeTok(token);
            observer.disconnect();
          }
        }
      };
      const observer = new MutationObserver(callback);
      observer.observe(targetNode, config);
    } else {
      console.log("somthing is wrong, Try again");
    }
  }, []);

  useEffect(() => {
    if (tok !== "" && documentId !== "") {
      fetch(
        `https://docs.google.com/document/d/${documentId}/revisions/tiles?id=${documentId}&start=1&showDetailedRevisions=false&token=${tok}`
      )
        .then((response) => {
          if (!response.ok) {
            console.log("error");
            console.log(response.statusText);
          }
          return response.text();
        })
        .then((data) => {
          changeDocData(data);
        })
        .catch((error) => {
          console.log(
            "there was an error with fetching the datat for the google docs" +
              error
          );
        });
    }
  }, [tok]);

  // useEffect(() => {
  //   chrome.runtime.sendMessage({ type: "GREETINGS" }, (response) => {
  //     console.log("Received response:", response)
  //     console.log(response.message)
  //   })
  // }, [])

  useEffect(() => {
    if (docdata.includes(")]}'")) {
      console.log("starting");
      const data = JSON.parse(docdata.replace(")]}'\n", ""));
      const userMap = data["userMap"];
      changeMap(userMap);
      const numOfChange = data["tileInfo"].at(-1)["end"];
      changeRev([numOfChange, true]);
      fetch(
        `https://docs.google.com/document/d/${documentId}/revisions/load?id=${documentId}&start=1&end=${numOfChange}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              "Network response was not ok " + response.statusText
            );
          }
          return response.text();
        })
        .then((data) => {
          const dataRev = JSON.parse(data.replace(")]}'\n", ""));
          console.log("message being sent");

          console.log("send messages to background");
          console.log(docdata);
          const fetchData = async () => {
            console.log("sending to background");
            const resp = await sendToBackground({
              name: "ping",
              body: {
                data: dataRev,
              },
            });
            console.log("received the message");
            console.log(resp);
            changeflag(resp[0]);
            changetime(resp[1]);
          };
          fetchData();
        })
        .catch((error) => {
          console.error("Fetch operation error:", error);
        });
    }
  }, [docdata]);

  if (rev !== null && flaglog !== null) {
    return (
      <button
        className={style.docbutton}
        onClick={() => {
          const fetchData = async () => {
            console.log("sending to background");
            const resp = await sendToBackground({
              name: "tab",
              body: {
                data: docdata,
                message: true,
                flags: flaglog,
                map: map,
              },
            });
            console.log("received the message");
          };
          fetchData();
        }}
      >
        <div className={style.buttondiv}>
          <h1 className={style.header}>Revision:</h1>
          <h2 className={style.text}>{rev[1] ? rev[0] : 0}</h2>
        </div>
        <div className={style.buttondiv}>
          <h1 className={style.header}>Copies:</h1>
          <h2 className={style.text}>{flaglog.length}</h2>
        </div>
        <div className={style.buttondiv}>
          <h1 className={style.header}>Time Spent:</h1>
          <h2 className={style.text}>{Math.round(tim)} minutes</h2>
        </div>
        <div>
          <h1>Copies:</h1>
          <h2>{flaglog.length}</h2>
        </div>
        <div>
          <h1>Time Spent:</h1>
          <h2>{Math.round(tim)} minutes</h2>
        </div>
      </button>
    );
  } else {
    return <button>loading</button>;
  }
}

const mountNode = document.createElement("div");
const docTitleBar = document.querySelector(".docs-titlebar-buttons");
docTitleBar.insertBefore(mountNode, docTitleBar.firstChild);
const root = createRoot(mountNode);
root.render(<DocButon />);
