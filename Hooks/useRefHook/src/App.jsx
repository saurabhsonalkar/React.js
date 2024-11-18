import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [myNum, setMyNum] = useState(0);

  const inputOne = useRef();
  const inputTwo = useRef();

  return (
    <>
      <h2>learncodeonline</h2>
      <input
        value={myNum}
        type="number"
        onChange={(e) => {
          setMyNum(e.target.value);
        }}
        ref={inputOne}
      />
      <input value={myNum} type="text" 
      ref={inputTwo}/>
      <h3>Value is: {myNum}</h3>
      <button
        onClick={() => {
          console.log(inputOne.current);
        }}
      >
        Ruppes
      </button>
      <button onClick={()=>{inputTwo.current.style.width="400px"}}>Dollers</button>
    </>
  );
}

export default App;
