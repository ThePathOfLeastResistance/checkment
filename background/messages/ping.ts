import type { PlasmoMessaging } from "@plasmohq/messaging"

console.log("hello from the backend")

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const message = await req.body.id
  console.log("sent the message")
  console.log(message)
  res.send({
    message
  })
}

export default handler
