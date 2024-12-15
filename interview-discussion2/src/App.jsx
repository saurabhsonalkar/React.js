import { useEffect, useState } from 'react'
import './App.css'

function App() {
  console.log("App rendered",Math.random());
  
// const [value, setValue] = useState(1);
const [value, setValue] = useState({value:0,});
const clickMe = () => {
  // console.log("logged");  //not re-rendering
  // setValue(value);  //not re-rendering
  // setValue(value+1); //multiple re-render 
  // setValue(1);  //not re-rendering
  // setValue(5); //only two imes re-rendering
  setValue({value:0,})  // multiple re-render 
  //because it pass by reference

}
useEffect(()=>{},[value.value])
  return (
    <>
    <h1>Main value: {value.value}</h1>
    <button onClick={clickMe}>Click here to multiply by 5</button>
    </>
  )
}

export default App
