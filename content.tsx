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
  const [tok, changeTok] = useState("")
  const [docdata, changeDocData] = useState({})

  useEffect(() => {
    const url = window.location.href
    console.log(typeof url)
    console.log(document)
    const matching = url.match("/document/d/([^/]+)/")
    if (matching) {
      const documentId = matching[1]
      const targetNode = document.body
      const config = { attributes: true }

      const callback = function (mutationsList, observer) {
        for (let mutation of mutationsList) {
          if (
            mutation.type === "attributes" &&
            mutation.attributeName === "tok"
          ) {
            changeTok(targetNode.getAttribute("tok"))
            observer.disconnect()
          }
        }
      }

      const observer = new MutationObserver(callback)

      observer.observe(targetNode, config)

      fetch(
        `https://docs.google.com/document/d/${documentId}/revisions/tiles?id=${documentId}&start=1&showDetailedRevisions=false&filterNamed=false&token=${tok}&includes_info_params=true`
      )
        .then((response) => {
          if (!response.ok) {
            console.log("error")
            console.log(response.statusText)
          }
          return response.json()
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
    } else {
      console.log("somthing is wrong, Try again")
    }
  }, [])

  useEffect(() => {
    const buttonStyle = document.createElement("style")
    buttonStyle.innerHTML = cssText
    document.head.appendChild(buttonStyle)
    const button = document.querySelector("doc-button")
  }, [rev, cop, per])

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
