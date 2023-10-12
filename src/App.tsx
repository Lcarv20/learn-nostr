import "@picocss/pico"
import { useEffect } from "react"

function App() {
  useEffect(() => {
    // @ts-ignore
    // console.log(window.nostr.enable())
  })
  return (
    <>
      <main>
        <button>Get Feed</button>
      </main>
      <section>
        <h1>Feed</h1>
      </section>
    </>
  )
}

export default App
