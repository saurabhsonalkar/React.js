import { useEffect, useState } from "react"

function App() {
  const [color, setColor] = useState('lavender')

  useEffect(()=>{
    document.body.style.backgroundColor=color

  },[color])

  return (
    <div style={{display:"flex", gap:"10px", padding:"10px"}}>
    <button value="Red" onClick={(e)=>setColor(e.target.value)}>Red</button>
    <button value="Black" onClick={(e)=>setColor(e.target.value)}>Black</button>
    </div>
  )
}

export default App
