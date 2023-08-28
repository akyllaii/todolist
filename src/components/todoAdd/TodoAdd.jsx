import React from 'react';
import {v4 as uuidv4} from "uuid";

const TodoAdd = ({todo, setTodo}) => {
    const addTodo = async (e) => {
        let text = e.target[0].value
        e.preventDefault()
        let isHas = todo.some(item => item.text === text)

        if (!isHas) {
            await setTodo((prev) => [...prev, {
                id: uuidv4(),
                text: text,
                isImportant: false,
                isDone: false,
                change: false
            }])
        } else {
            alert('Такая задача уже существует!!!')
        }
        e.target[0].value = ''
    }
    return (
        <form className='form' onSubmit={addTodo}>
            <input className='form__input' placeholder='Add a task' required type="text"/>
            <button className='form__btn' type='submit'>Add</button>
        </form>
    );
};

export default TodoAdd;