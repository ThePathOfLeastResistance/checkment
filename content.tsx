import { error } from "console"
import { report } from "process"
import cssText from "data-text:~/style.css"
import type { PlasmoCSConfig } from "plasmo"
import { useEffect, useState } from "react"
import { render } from "react-dom"
import { createRoot } from "react-dom/client"

const hel = "dssdfaasdfasdf"

const hello = "hasdl"

export const config: PlasmoCSConfig = {
  matches: ["https://docs.google.com/document/*"]
}

function DocButon() {
  const [rev, changeRev] = useState([null, false])
  const [cop, changeCop] = useState([null, false])
  const [per, changePer] = useState([null, false])
  const [docdata, changeDocData] = useState("")
  const [tok, changeTok] = useState("")
  const [documentId, changeDocumentId] = useState("")

  useEffect(() => {
    const url = window.location.href
    // console.log(typeof url)
    // console.log(document)
    const matching = url.match("/document/d/([^/]+)/")
    if (matching) {
      changeDocumentId(matching[1])
      const targetNode = document.body
      const config = { attributes: true }

      const callback = function (mutationsList, observer) {
        for (let mutation of mutationsList) {
          if (
            mutation.type === "attributes" &&
            mutation.attributeName === "tok"
          ) {
            // console.log("tok changed" + targetNode.getAttribute("tok"))
            const token = targetNode.getAttribute("tok")
            changeTok(token)
            observer.disconnect()
          }
        }
      }
      const observer = new MutationObserver(callback)
      observer.observe(targetNode, config)
    } else {
      console.log("somthing is wrong, Try again")
    }
  }, [])

  useEffect(() => {
    if (tok !== "" && documentId !== "") {
      fetch(
        `https://docs.google.com/document/d/${documentId}/revisions/tiles?id=${documentId}&start=1&showDetailedRevisions=false&token=${tok}`
      )
        .then((response) => {
          if (!response.ok) {
            console.log("error")
            console.log(response.statusText)
          }
          return response.text()
        })
        .then((data) => {
          changeDocData(data)
        })
        .catch((error) => {
          console.log(
            "there was an error with fetching the datat for the google docs" +
              error
          )
        })
    }
  }, [tok])

  useEffect(() => {
    if (docdata.includes(")]}'")) {
      const parsedRevData = []
      const data = JSON.parse(docdata.replace(")]}'\n", ""))
      const userMap = data["userMap"]
      const numOfChange = data["tileInfo"].at(-1)["end"]
      changeRev(numOfChange)

      fetch(
        `https://docs.google.com/document/d/${documentId}/revisions/load?id=${documentId}&start=1&end=${numOfChange}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              "Network response was not ok " + response.statusText
            )
          }
          return response.text()
        })
        .then((data) => {
          const dataRev = JSON.parse(data.replace(")]}'\n", ""))
          console.log(dataRev)
          dataRev.changelog.map((data) => {
            if (
              Object.keys(data[0]).includes("mts") &&
              data[0]["mts"].length == 2
            ) {
              for (let i = 0; i < data[0]["mts"].length; i++) {
                console.log(data[0]["mts"][i])
                if (data[0]["mts"][i]["ty"] == "is") {
                  console.log(data[0]["mts"][i]["s"])
                  console.log(data[0]["mts"][i]["ibi"])
                } else if (data[0]["mts"][i]["ty"] == "mlti") {
                  console.log(data[0]["mts"][i]["mts"][0])
                  console.log(data[0]["mts"][i]["ibi"][0])
                }
              }
            }
          })
        })
        .catch((error) => {
          console.error("Fetch operation error:", error)
        })
    }

    const buttonStyle = document.createElement("style")
    buttonStyle.innerHTML = cssText
    document.head.appendChild(buttonStyle)
  }, [docdata])

  const handleClick = () => {
    console.log("Button clicked")
  }
  return (
    <button className="doc-button" onClick={handleClick}>
      {rev[1] && `Rev: ${rev[0]}`}
      {cop[1] && `Rev: ${rev[0]}`}
      {per[1] && `Rev: ${per[0]}`}
    </button>
  )
}

const mountNode = document.createElement("div")
const docTitleBar = document.querySelector(".docs-titlebar-buttons")
console.log(docTitleBar.firstChild)
docTitleBar.insertBefore(mountNode, docTitleBar.firstChild)
const root = createRoot(mountNode)
root.render(<DocButon />)
