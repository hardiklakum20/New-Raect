import { useState } from 'react'
import './App.css'

function App() {  
  console.log("App Rendered", Math.random());
  

  const [value, setValue] = useState(1)
  // const [MultipliedValue, setMultipliedValue] = useState(1)

  // let MultipliedValue = value * 5

  // const multiplybyfive = () => {
  //     // setMultipliedValue(value * 5)
  //     setValue(value + 1)
  // }

  const clickMe = () => {
      setValue(1)
      
  }

  return (
    <>
      <h1>Main Value : {value}</h1>
      <button onClick={clickMe}>Click to Multiply by 5</button>
      {/* <h2>Multiplied Value: {MultipliedValue}</h2> */}
    </>
  )
}

export default App
