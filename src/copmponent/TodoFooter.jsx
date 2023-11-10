import React from 'react'

function TodoFooter({todos,setTodos}) {
  
  const deleteAll=()=>{
    
    setTodos([])
  }
  return (
    <div className='fot-note' >
      <p>You have {todos.length} list</p>
      <button className='clear-btn' onClick={deleteAll}>clear all</button>
    </div>
  )
}

export default TodoFooter