import React, { useEffect, useState } from 'react'
import { IoMdRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";


function Todo({ todo, onRemoveTodo, onUpdateTodo }) {
    const { id, content } = todo;
    const [edit, setEdit] = useState(false);
    const [editTodo, setEditTodo] = useState(content);
    const removeTodo = () => {
        onRemoveTodo(id);
    }
    const updateTodo = () => {
        const request = {
            id: id,
            content: editTodo
        }
        onUpdateTodo(request);
        setEdit(false);
    }

    return (
        <div className='todos'>
            <div className='todo-text'>
                {
                    edit ? <input value={editTodo} onChange={(e) => setEditTodo(e.target.value)} type="text" className='todo-text' /> : content
                }

            </div>
            <div className='icons'>
                <div className='remove-icon'><IoMdRemoveCircle onClick={removeTodo} /></div>
                <div className='edit-icon'>
                    {
                        edit ? <FaCheck onClick={updateTodo} /> : <FaEdit onClick={() => setEdit(true)} />

                    }

                </div>

            </div>
        </div>
    )
}

export default Todo