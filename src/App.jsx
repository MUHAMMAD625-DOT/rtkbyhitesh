import React from 'react'
import AddTodo from './components/addTodo'
import Todos from './components/Todos'

function App() {
  return (
    <div  className="justify-center items-center flex flex-col mt-10">
      <h1 className='font-bold text-2xl'>learning redux tool kit</h1>
      <AddTodo/>
      <Todos/>
    </div>
  )
}

export default App
