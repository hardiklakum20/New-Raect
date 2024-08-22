import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componets/Card'

function App() {
  let myObj = {
    name : "hardik",
    age: 21
  }

  let newArr = [1, 2, 3]
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-md mb-4'>Tailwind Test</h1>      
      <Card username = "chai aur code" btntext = "Click me"/>
      <Card username="Hardik"/>
    </>
  )
}

export default App
