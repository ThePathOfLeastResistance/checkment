import type { PlasmoMessaging } from "@plasmohq/messaging"


console.log("hello from the backend")

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const message = await req.body.id

  res.send({
    message
  })
}

export default handler
