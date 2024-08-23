import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-9 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-lg shadow-lg">
            <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor: "red"}} onClick={() => setColor("red")}>Red</button>
            <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor: "green"}} onClick={() => setColor("green")}>Green</button>
            <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor: "blue"}} onClick={() => setColor("blue")}>Blue</button>
            <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor: "purple"}} onClick={() => setColor("purple")}>Purple</button>
            <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor: "gray"}} onClick={() => setColor("gray")}>Gray</button>
            <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor: "yellow"}} onClick={() => setColor("yellow")}>Yellow</button>
            </div>          
        </div>
      </div>
    </>
  )
}

export default App
