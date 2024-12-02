import './App.css'
import {useSelector} from 'react-redux'
import Navbar from './components/Navbar'

function App() {
const count = useSelector((state) => state.counter.value)
  return (
    <>
    <h2>Counter from App: {count}</h2>
    <Navbar/>
    </>
  )
}

export default App
