import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((res) => {
      setJokes(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  },[])

  return (
    <>
      <h1>Chai aur fullStack</h1>
      <p>JOKES : {jokes.length}</p>

      {
        jokes.map((jokes) => (
          <div key={jokes.id}>
            <h2>{jokes.title}</h2>
            <h3>{jokes.content}</h3>
          </div>
        ))
      }

    </>
  )
}

export default App
