import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
   const todos = useSelector(state => state.todos)
   const dispatch = useDispatch()
  return (
    <>
      <div className='my-6 font-extrabold'>Todos</div>
      {todos.map((todo) => (
       <li key={todo.id} className='border bg-gray-400 w-[500px]  pl-2 flex justify-between rounded-md items-center'>
           {todo.text}
           <button className='border bg-red-700 py-2 px-5 rounded-lg font-bold ' onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
       </li>
      ))}
    </>
  )
}

export default Todos
