import { useState } from 'react';
import './App.css'

function App() {
  const [value, setValue] = useState('')

  return (
    <>
    <input type="text" onKeyUp={(e)=>{setValue(e.target.value)}} placeholder='Type something...'/>
    <button onClick={()=>{window.navigator.clipboard.writeText(value)}} style={{cursor:"pointer"}}>Copy</button>
    </>
  )
}

export default App
