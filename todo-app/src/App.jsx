import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] =useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);
  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  }

  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)]);
  }
  const updateTodo = (newTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== newTodo.id) {
        return todo;
      }
      return newTodo;
    })
    setTodos([...updatedTodos])
  }

  return (
    <div className='app'>
      <div className='todo-container'>
        <div><TodoCreate onCreateTodo={createTodo} /></div>
        <div><TodoList todos={todos} onRemoveTodo={removeTodo} onUpdateTodo={updateTodo} /></div>


      </div>

    </div >
  )
}

export default App
