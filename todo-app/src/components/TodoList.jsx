import React from 'react'
import Todo from './Todo'
import { useEffect } from 'react'

function TodoList({ todos, onRemoveTodo, onUpdateTodo }) {
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);
    return (
        <div className='todo-list'>
            {

                todos && todos.map((todo) =>
                    (<Todo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} onUpdateTodo={onUpdateTodo} />))

            }



        </div>
    )
}

export default TodoList
