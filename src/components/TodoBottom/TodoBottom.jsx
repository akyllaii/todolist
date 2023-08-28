import React from 'react';

const TodoBottom = ({todo,setTodo}) => {
    const delAllDoneTodo = () => {
        setTodo(prev => prev.filter(item => !item.isDone))
    }
    return (
        <div className='todo__bottom'>
            <div style={{background: todo.every(item => item.isDone) ? '#3c1b96' : `linear-gradient(90deg, rgba(4,0,116,1) 0%, rgba(251,251,255,1) ${100/todo.length*(todo.filter(item => item.isDone).length)}%)`}} className='todo__bottom-lvl'> {todo.filter(item => item.isDone).length} of {todo.length} tasks done</div>
            <button className='todo__bottom-rem' onClick={delAllDoneTodo}>Remove checked</button>
        </div>
    );
};

export default TodoBottom;