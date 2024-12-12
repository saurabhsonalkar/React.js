import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  let multipliedCount = count * 5;
  const multiply = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>Main count:{count} </h1>
      <button onClick={multiply}>Click here to multiple by 5</button>
      <h2>Multiplied count:{multipliedCount} </h2>
    </>
  );
}

export default App;
