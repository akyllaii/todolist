import React, {useState} from 'react';

const TodoItem = ({item,delOneTodo,setImpOneTodo,setDoneOneTodo,setChangeOneTodo}) => {
    const [change, setChange] = useState(false)
    const [changeText, setChangeText] = useState(item.text || '')

    const changeFunc = (id, text) => {
        if (change) {
            setChangeOneTodo(id, text)
        }
        setChange(prev => !prev)
    }
    return (
        <li className='todo__item'>
            <div className="todo__item-inp">
                <input checked={item.isDone} onChange={() => setDoneOneTodo(item.id)} type="checkbox"/>
                {
                    change ? <input value={changeText} type="text" onChange={(e) => setChangeText(e.target.value)}/>
                        : <p style={{color: item.isDone ? 'white' : 'black'}}>{item.text}</p>
                }
            </div>

            <div className="todo__item-btns">
                <button className='todo__item-btn' style={{background: item.isImportant ? 'red' : 'buttonFace'}} type='button' onClick={() => setImpOneTodo(item.id)}>Important</button>
                <button className='todo__item-btn' onClick={() => changeFunc(item.id, changeText)}>{change ? 'Save' : 'Change'}</button>
                <button className='todo__item-btn' type='button' onClick={() => delOneTodo(item.id)}>Delete</button>
            </div>
        </li>
    );
};

export default TodoItem;