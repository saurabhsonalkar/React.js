import Usecolor from './Usecolor.jsx'

function App(){

  const [color, setColor] = Usecolor("olive")

  return(

    <>

    <div className="w-full h-screen" style={{backgroundColor:color}}>
      <div className="fixed flex bottom-12 justify-center inset-x-0">
<button className="px-2 py-3 m-2" onClick={()=>{setColor("white")}}>light</button>
<button onClick={()=>{setColor("black")}}>dark</button>
      </div>
    </div>
    
    
    </>
  )
}


export default App;