import type { PlasmoMessaging } from "@plasmohq/messaging"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const message = `Received ID: ${req.body.id}`
  console.log("backend")
  res.send({ message })
}

export default handler
