import { useState } from "react";

function Input({setTodos,item,setItem,todos}){
    const [input, setInput]= useState('')
    const [idCount, setIdCount] = useState(1)

    const handleChange=(e)=>{
        setInput(e.target.value)
    }

    const Add=()=>{
        if(input!==''){
            setTodos((previousValues)=>[
                ...previousValues,
                
                {
                    id:idCount,
                    text:input
                },
            ])
            
            setInput('')
            setIdCount(idCount+1)
                
                
        }
        else{
            alert("input can't be empty")
        }
        
            
    }
    return( 
        
        
            
        <div className="todo-input">
            <input type='text' placeholder='add your todo here..'value={input} onChange={handleChange} required />
           
        
            {item.length?
                <button className="add-btn" onClick={Add}>update</button>
                :
                <button className="add-btn" onClick={Add}>+</button>
            }   
            
                
            
            
        </div>
            
        
    )
}
export default Input;