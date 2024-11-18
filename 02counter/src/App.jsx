// import './App.css'

// function App() {
//   let count = 0
//   const add = () => {
//     count = count +1
//     console.log(count);

//   }

//   const minus = () => {
//     count = count - 1
//     console.log(count);

//   }

//   return (
//     <>
//       <h1>Counetr: {count}</h1>
//       <button onClick={add}>Add</button>
//       <button onClick={minus}>Minus</button>
//     </>
//   )
// }

// export default App

import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const Add = () => {
    if (counter < 20) setCounter((counter = counter + 1));
  };

  const minus = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={Add}>Add</button>
      <button onClick={minus}>Minus</button>
    </>
  );
}

export default App;
