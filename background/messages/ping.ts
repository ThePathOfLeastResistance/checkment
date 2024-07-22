import { useEffect, useState } from "react"

import type { PlasmoMessaging } from "@plasmohq/messaging"

console.log("hello from the backend")

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const dataRev = await req.body.data
  console.log("hello from the backend")
  console.log("sent the message")
  const parsedRevData = []
  let wirtingDataJson = []

  function converTime(input: number) {
    const data = new Date(input)
    // console.log(data.toLocaleString())
    ;("6/7/2024, 11:18:43 PM")
    const date = data.toLocaleString().split(",")[0]
    const timedata = data.toLocaleString().split(",")[1].split(" ")
    const time = timedata[0].split(":").slice(0, 2) + timedata[1]
    return [date, time]
  }
  let flags = []
  let totaltime = 0
  console.log("hello from the backend")
  console.log(dataRev)
  for (let i = 1; i < dataRev.changelog.length; i++) {
    const data = dataRev.changelog[i]
    const [date, time] = converTime(data[1])
    const user = data[2]
    if (i >= 2) {
      let dif = (data[1] - dataRev.changelog[i - 1][1]) / 60000
      if (dif < 10) {
        totaltime += dif
      }
    }
    let index = null
    let text = null
    if (Object.keys(data[0]).includes("mts")) {
      for (let i = 1; i < Object.keys(data[0]["mts"]).length; i++) {
        if (data[0]["mts"][i]["ty"] == "is") {
          text = data[0]["mts"][i]["s"]
          if (text.length > 100) {
            flags.push({ text, date, time, user })
          }
          index = data[0]["mts"][i]["ibi"]
          wirtingDataJson.push({
            date,
            time,
            user,
            text,
            index
          })
        } else if (data[0]["mts"][i]["ty"] == "mlti") {
          for (let k = 0; k < data[0]["mts"][i]["mts"].length; k++) {
            if (data[0]["mts"][i]["mts"][k]["ty"] == "is") {
              text = data[0]["mts"][i]["mts"][k]["s"]
              index = data[0]["mts"][i]["mts"][k]["ibi"]
              if (text.length > 100) {
                flags.push({ text, date, time, user })
              }
              wirtingDataJson.push({
                date,
                time,
                user,
                text,
                index
              })
            } else if (data[0]["mts"][i]["mts"][k]["ty"] == "ds") {
              text = "ds"
              index = [
                data[0]["mts"][i]["mts"][k]["si"],
                data[0]["mts"][i]["mts"][k]["ei"]
              ]
              if (text.length > 100) {
                flags.push({ text, date, time, user })
              }
              wirtingDataJson.push({
                date,
                time,
                user,
                text,
                index
              })
            }
          }
        } else if (data[0]["mts"][i]["ty"] == "ds") {
          text = "ds"
          index = [data[0]["mts"][i].si, data[0]["mts"][i].ei]
          if (text.length > 100) {
            flags.push({ text, date, time, user })
          }
          wirtingDataJson.push({
            date,
            time,
            user,
            text,
            index
          })
        }
      }
    } else if (Object.keys(data[0]).includes("ty")) {
      if (data[0]["ty"] == "is") {
        text = data[0].s
        index = data[0].ibi
        if (text.length > 100) {
          flags.push({ text, date, time, user })
        }
        wirtingDataJson.push({
          date,
          time,
          user,
          text,
          index
        })
      } else if (data[0]["ty"] == "ds") {
        text = "ds"
        index = [data[0].si, data[0].ei]
        if (text.length > 100) {
          flags.push({ text, date, time, user })
        }
        wirtingDataJson.push({
          date,
          time,
          user,
          text,
          index
        })
      }
    }
    console.log(flags)

    if (Number(dataRev.changelog.length - 1) == Number(i)) {
      console.log(flags, totaltime, wirtingDataJson)
      console.log(flags)
      console.log(totaltime)
      res.send([flags, totaltime, wirtingDataJson])
    }
  }
}

export default handler
