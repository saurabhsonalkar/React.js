import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement } from '../features/counter/counterSlice'

function Navbar() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
  return (
    <div>
      <h2>Counter from Navbar: {count}</h2>
      <button onClick={()=> dispatch(increment())}>increment</button>
      <button onClick={()=> dispatch(decrement())}>decrement</button>
    </div>
  )
}

export default Navbar
