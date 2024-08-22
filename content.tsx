import { error } from "console";
import { report } from "process";
import { useEffect, useState } from "react";
import { render } from "react-dom";

import type { PlasmoCSConfig, PlasmoGetStyle } from "plasmo";

import { createRoot } from "react-dom/client";
import { sendToBackground } from "@plasmohq/messaging";

import cssText from "data-text:~style.css";
import "./style.css"; // Import Tailwind CSS

export const getStyle: PlasmoGetStyle = () => {
  const style = document.createElement("style");
  style.textContent = cssText;
  return style;
};

export const config: PlasmoCSConfig = {
  matches: ["https://docs.google.com/document/*"],
};

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
            changeDocData(resp[2]);
          };
          fetchData();
        })
        .catch((error) => {
          console.error("Fetch operation error:", error);
        });
    }
  }, [docdata]);
  console.log(map);
  if (rev !== null && flaglog !== null) {
    return (
      <button
        className="bg-[#F1F6F9] border-2 border-[#394867] rounded flex flex-row items-center px-3 py-2 text-[#212A3E] text-base font-bold"
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
            console.log("received the message" + map);
          };
          fetchData();
        }}
      >
        <h1 className="inline-block ml-2 mr-1">Edits:</h1>
        <h2 className="inline-block mr-2">{rev[1] ? rev[0] : 0}</h2>

        <h1 className="inline-block ml-2 mr-1">Copies:</h1>
        <h2 className="inline-block mr-2">{flaglog.length}</h2>

        <h1 className="inline-block ml-2 mr-1">Time Spent:</h1>
        <h2 className="inline-block mr-2">{Math.round(tim)} minutes</h2>
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
