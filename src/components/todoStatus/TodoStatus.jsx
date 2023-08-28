import React from 'react';

const TodoStatus = ({setStatus}) => {
    return (
        <div className='todo__status'>
            <button onClick={() => setStatus('All')} className="todo__status-btn">All</button>
            <button onClick={() => setStatus('Done')} className="todo__status-btn">Done</button>
            <button onClick={() => setStatus('Important')} className="todo__status-btn">Important</button>
        </div>
    );
};

export default TodoStatus;