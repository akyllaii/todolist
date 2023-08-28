import React from 'react';
import TodoItem from "./todoItem";

const TodoList = ({todo,setTodo,status}) => {

    const delOneTodo = (id) => {
        setTodo(prev => prev.filter(item => item.id !== id))
    }

    const setImpOneTodo = (id) => {
        setTodo(prev => prev.map(item => {
            if (item.id === id) {
                return {...item, isImportant: !item.isImportant}
            }
            return item
        }))
    }

    const setDoneOneTodo = (id) => {
        setTodo(prev => prev.map(item => {
            if (item.id === id) {
                return {...item, isDone: !item.isDone}
            }
            return item
        }))
    }

    const setChangeOneTodo = (id,text) => {
        setTodo(prev => prev.map(item => {
            if (item.id === id) {
                return {...item, text: text}
            }
            return item
        }))
    }
    return (
        <ul className='todo'>
            {
                status === 'Done' && todo.every(item => !item.isDone)
                ? <p>список выполненных задач пуст</p> : status === 'Important' &&
                    todo.every(item => !item.isImportant) ? <p>список важных задач пуст</p> :
                    status === 'all' && !todo.length ? <p>tasks is empty</p> : ''
            }
            {
                todo.filter((item) => {
                    if (status === 'Done') {
                        return item.isDone
                    } else if (status === 'Important') {
                        return item.isImportant
                    }
                    return item
                }).map((item) => (
                    <TodoItem setChangeOneTodo={setChangeOneTodo} setDoneOneTodo={setDoneOneTodo} setImpOneTodo={setImpOneTodo} delOneTodo={delOneTodo} item={item} key={item.id}/>
                ))
            }
        </ul>
    );
};

export default TodoList;
