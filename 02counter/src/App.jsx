import { useState } from 'react';
import './App.css'

function App() {  

  const [counter, setCounter]= useState(0)

  // let counter = 5

  const addvalue = () => {       
    // counter = counter + 1
    if (counter < 20) {       
      setCounter(counter+ 1)
    }
  }

  const removevalue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>    
      <h1>Chai aur react</h1> 
      <h2>Counter Value : {counter}</h2> 

      <button onClick={addvalue}>Add Value</button><br />
      <button onClick={removevalue}>Decrease Value</button>
    </>
  )
}

export default App
