export default function DeltaFlyerPage() {
  window.addEventListener("message", (event) => {
    if (event.source !== window && event.data.type === "MY_DATA") {
      const data = event.data.payload
      console.log("Received data:", data)
      // Handle your data here
    }
  })
  console.log("Background script is running")
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <h2>Delta Flyer Tab</h2>

      <p>This tab is only available on the Delta Flyer page.</p>
    </div>
  )
}
