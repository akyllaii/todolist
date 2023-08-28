import {useEffect, useState} from "react";
import TodoList from "./components/todolist/todoList";
import TodoAdd from "./components/todoAdd/TodoAdd";
import TodoBottom from "./components/TodoBottom/TodoBottom";
import './styles/style.css'
import TodoStatus from "./components/todoStatus/TodoStatus";


function App() {
  const [todo, setTodo] =  useState([])
    const [status,setStatus] = useState('All')

  useEffect(() => {
    if (localStorage.getItem('todo') !== null) {
      setTodo(JSON.parse(localStorage.getItem('todo')))
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('todo',JSON.stringify(todo))
  },[todo])
  return (
    <div className="App">
      <TodoAdd todo={todo} setTodo={setTodo}/>
        {
            todo.length ? <>
                <TodoList status={status} todo={todo} setTodo={setTodo}/>
                <TodoBottom todo={todo} setTodo={setTodo}/>
                <TodoStatus status={status} setStatus={setStatus}/>
            </> :
                <p>Tasks list is empty</p>
        }

    </div>
  );
}

export default App;
