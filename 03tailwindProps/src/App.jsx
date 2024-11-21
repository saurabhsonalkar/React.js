import './App.css'
import Card from './Componenets/Card.jsx'

function App() {
  let obj = {
    name:"hitesh",
    age:21
  }
  let arr=[1,2,3]

  return (
    <>
    <Card name="City of love" obj1={obj} btnText="click me"/>
    <Card name="City of light" arr1={arr} btnText=""/>
   
    </>
  )
}

export default App
