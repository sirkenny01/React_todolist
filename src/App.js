import Input from './copmponent/Input'
import DisplayTodo from './copmponent/DisplayTodo';
import TodoFooter from './copmponent/TodoFooter';
import { useState } from 'react';

function App() {
  const [todos, setTodos]= useState([])
  const [item, setItem] = useState('')
  
  return (
    <div className='todo-container'>
    <header>
      <h1>Todo App</h1>
    </header>
      <Input setTodos={setTodos} item={item} setItem={setItem} todos={todos}/>
      <DisplayTodo todos={todos} setItem={setItem} setTodos={setTodos}/>
      <TodoFooter todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
