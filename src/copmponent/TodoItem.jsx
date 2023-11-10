import React from 'react'

function TodoItem({todo,setItem, handleDelete}) {
  const Edit=(id)=>{
    setItem(todo.text)
  }
  return (
    <div>
      <div className='list-container' key={todo.id}>
        <p>{todo.text}</p>
        <div className='item-btn'>
          <button className='delete-btn' onClick={()=>handleDelete(todo.id)}>del</button>
          <button className='update-btn'onClick={()=>Edit(todo.id)}>Edit</button>
        </div>
        
      </div>  
      
    </div>
  )
}

export default TodoItem