import React, { useState } from 'react'
import '../App.css'

function TodoCreate({ onCreateTodo }) {
  const clearInput = () => {
    setNewTodo("");
  }
  const [newTodo, setNewTodo] = useState("");
  const createTodo = () => {
    if (!newTodo) return;
    const request = {
      id: Math.floor(Math.random() * 9999999),
      content: newTodo
    }
    onCreateTodo(request)
    clearInput();

  }


  return (
    <div className='todo-create'>
      <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)}
        className='todo-input' type="text" placeholder='Todo Enter' />
      <button onClick={createTodo} className='create-btn'>Create Todo</button>
    </div>
  )
}

export default TodoCreate