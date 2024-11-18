//  1.way


import {useState} from 'react'
function App(){
  const[color, setColor] = useState("teal")

  return(
    <>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0'>
        
        <div className='flex flex-wrap bg-white rounded-3xl justify-center gap-3 px-3 py-2'>
          
          <button className='outline-none px-4 py-1 rounded-full bg-white text-black 'onClick={()=>{setColor("white")}} >white</button>

          <button className='outline-none px-4 py-1 rounded-full bg-black text-white ' onClick={()=>{setColor("black")}}>black</button>
        </div>
      </div>

    </div>
    
    
    
    
    </>
  )
}


export default App;





// 2.way
/*
import { useState,useEffect } from "react";
import "./App.css";

function App() {
  let [color, setColor] = useState("olive");

  useEffect(()=>{document.body.style.backgroundColor = color;},[color])

  function tarVal(e) {
    setColor(e.target.id);
  }

  return (
    <>
      <div id="container" className="duration-2000">
        <button id="Red" style={{ backgroundColor: "red" }} onClick={tarVal}>
          Red
        </button>
        <button
          id="Green"
          style={{ backgroundColor: "green" }}
          onClick={tarVal}
        >
          Green
        </button>
        <button id="Blue" style={{ backgroundColor: "blue", color:"white" }}
        onClick={()=>{document.body.style.backgroundColor="blue"}}>
          Blue
        </button>
        <button
          id="Olive"
          style={{ backgroundColor: "olive", color:"white"}}
          onClick={tarVal}
        >
          Olive
        </button>
        <button id="Gray" style={{ backgroundColor: "gray", color:"white"}} onClick={tarVal}>
          Gray
        </button>
        <button
          id="Yellow"
          style={{ backgroundColor: "yellow" }}
          onClick={tarVal}
        >
          Yellow
        </button>
        <button id="Pink" style={{ backgroundColor: "pink" }} onClick={tarVal}>
          Pink
        </button>
        <button
          id="Purple"
          style={{ backgroundColor: "purple", color:"white" }}
          onClick={tarVal}
        >
          Purple
        </button>
        <button
          id="Lavender"
          style={{ backgroundColor: "lavender" }}
          onClick={tarVal}
        >
          Lavender
        </button>
        <button
          id="White"
          style={{ backgroundColor: "white" }}
          onClick={tarVal}
        >
          White
        </button>
        <button
          id="Black"
          style={{ backgroundColor: "black" ,color:"white"}}
          onClick={tarVal}
        >
          Black
        </button>
      </div>
    </>
  );
}

export default App;
*/




// 2.way
/*

import { useState,useEffect } from "react";
import "./App.css";

function App() {
  let [color, setColor] = useState("olive");

  useEffect(()=>{document.body.style.backgroundColor = color;},[color])

  function tarVal(e) {
    setColor(e.target.id);
  }

  return (
    <>
      <div id="container" className="duration-2000">
        <button id="Red" style={{ backgroundColor: "red" }} onClick={tarVal}>
          Red
        </button>
        <button
          id="Green"
          style={{ backgroundColor: "green" }}
          onClick={tarVal}
        >
          Green
        </button>
        <button id="Blue" style={{ backgroundColor: "blue", color:"white" }}
        onClick={()=>{document.body.style.backgroundColor="blue"}}>
          Blue
        </button>
        <button
          id="Olive"
          style={{ backgroundColor: "olive", color:"white"}}
          onClick={tarVal}
        >
          Olive
        </button>
        <button id="Gray" style={{ backgroundColor: "gray", color:"white"}} onClick={tarVal}>
          Gray
        </button>
        <button
          id="Yellow"
          style={{ backgroundColor: "yellow" }}
          onClick={tarVal}
        >
          Yellow
        </button>
        <button id="Pink" style={{ backgroundColor: "pink" }} onClick={tarVal}>
          Pink
        </button>
        <button
          id="Purple"
          style={{ backgroundColor: "purple", color:"white" }}
          onClick={tarVal}
        >
          Purple
        </button>
        <button
          id="Lavender"
          style={{ backgroundColor: "lavender" }}
          onClick={tarVal}
        >
          Lavender
        </button>
        <button
          id="White"
          style={{ backgroundColor: "white" }}
          onClick={tarVal}
        >
          White
        </button>
        <button
          id="Black"
          style={{ backgroundColor: "black" ,color:"white"}}
          onClick={tarVal}
        >
          Black
        </button>
      </div>
    </>
  );
}

export default App;


*/








// 3. way

// import "./App.css";

// function App() {

  
//   function tarVal(e) {
//     document.body.style.backgroundColor = e.target.id;
    
//   }

//   return (
//     <>
//       <div id="container">
//         <button id="Red" style={{ backgroundColor: "red" }} onClick={tarVal}>
//           Red
//         </button>
//         <button
//           id="Green"
//           style={{ backgroundColor: "green" }}
//           onClick={tarVal}
//         >
//           Green
//         </button>
//         <button id="Blue" style={{ backgroundColor: "blue" }}>
//           Blue
//         </button>
//         <button
//           id="Olive"
//           style={{ backgroundColor: "olive" }}
//           onClick={tarVal}
//         >
//           Olive
//         </button>
//         <button id="Gray" style={{ backgroundColor: "gray" }} onClick={tarVal}>
//           Gray
//         </button>
//         <button
//           id="Yellow"
//           style={{ backgroundColor: "yellow" }}
//           onClick={tarVal}
//         >
//           Yellow
//         </button>
//         <button id="Pink" style={{ backgroundColor: "pink" }} onClick={tarVal}>
//           Pink
//         </button>
//         <button
//           id="Purple"
//           style={{ backgroundColor: "purple" }}
//           onClick={tarVal}
//         >
//           Purple
//         </button>
//         <button
//           id="Lavender"
//           style={{ backgroundColor: "lavender" }}
//           onClick={tarVal}
//         >
//           Lavender
//         </button>
//         <button
//           id="White"
//           style={{ backgroundColor: "white" }}
//           onClick={tarVal}
//         >
//           White
//         </button>
//         <button
//           id="Black"
//           style={{ backgroundColor: "black" }}
//           onClick={tarVal}
//         >
//           Black
//         </button>
//       </div>
//     </>
//   );
// }

// export default App;
