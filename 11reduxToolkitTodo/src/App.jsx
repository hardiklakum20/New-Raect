import './App.css'
import AddTodo from './componets/AddTodo'
import Todos from './componets/Todos'

function App() { 
  
  return (
    <>
      <h1 className='text-white'>Learn About Redux</h1> 
      <AddTodo/>
      <Todos/>     
    </>
  )
}

export default App
