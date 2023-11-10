import React from 'react'
import TodoItem from './TodoItem'

function DisplayTodo({todos, setItem, setTodos}) {
  const handleDelete=(id)=>{
    const deleteTodo=todos.filter(todo=>todo.id!==id)
    setTodos(deleteTodo)
  }
  
  return (
    <div>
    {
      todos.map((todo)=>{
        return(
          <TodoItem key={todo.id} todo={todo} setItem={setItem} handleDelete={handleDelete} />
        )
      })
    }
        
    </div>
    
  )
}

export default DisplayTodo
