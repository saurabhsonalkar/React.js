import Usecolor from "./Usecolor";


function App(){

    const [ color, setColor] = Usecolor("red")
    document.body.style.backgroundColor=color
    return(

        <>
        <button onClick={()=>{setColor("white")}}>light</button>
        <button onClick={()=>{setColor("black")}}>dark</button>
        
        </>
    )
}

export default App;