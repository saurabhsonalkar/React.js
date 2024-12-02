// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   const add = () => {
//     setCount(count+1);
//   };

//   const sub = () => {
//     setCount(count - 1);
//   };

//   return (
//     <>
//       <h1>count:{count} </h1>
//       <button onClick={add}>Add</button>
//       <button onClick={sub}>Sub</button>
//     </>
//   );
// }

// export default App;

// import { useState } from "react";

// function App() {
//   const [color, setColor] = useState("red");
//   // document.body.style.backgroundColor = `${color}`;
//   return (
//     <div style={{backgroundColor:color, height:"100vh",}}>

//       <button value="lavender" onClick={(e) => setColor(e.target.value)}>
//         lavender
//       </button>
//       <button value="pink" onClick={(e) => setColor(e.target.value)}>
//         Pink
//       </button>
//     </div>
//   );
// }

// export default App;


import { useState } from "react";

function App() {
  const [color, setColor] = useState("red");

  return (
    <div>
      <style>
        body{
          `{background-color: ${color};}`
        }
      </style>
      <button value="lavender" onClick={(e) => setColor(e.target.value)}>
        Lavender
      </button>
      <button value="pink" onClick={(e) => setColor(e.target.value)}>
        Pink
      </button>
    </div>
  );
}

export default App;
