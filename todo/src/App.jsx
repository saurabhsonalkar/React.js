import { useState } from "react";


function App(){
  const [todo, setTodo] = useState([])
  const [newTodo, setNewTodo] = useState('')

  const addTodo = (e) => {
    e.preventDefault()
    setTodo([...todo,newTodo])
    setNewTodo('')

  }

  const deleteTodo = (deleteindex) => {
    setTodo(todo.filter((_,index)=> index !== deleteindex))
  }
  return(
    <>
    <input type="text" value={newTodo} onChange={(e)=> setNewTodo(e.target.value)}/>
    <button onClick={addTodo}>Add todo</button>
    <ul>
      {todo.map((item,index)=>
        {return <li key={index}>{item} 
        <button onClick={()=>{setNewTodo(item)}}>update</button>
        <button onClick={()=> deleteTodo(index)}>Delete</button> </li>}
      )}
    </ul>

    
    </>
  )
}

export default App;