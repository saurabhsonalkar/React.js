import {useSelector, useDispatch} from 'react-redux' 
import { increment, decrement } from '../features/counter/counterSlice'


function Navbar() {
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>Counter from navbar: {count}</h2>
      <button onClick={()=> dispatch(increment())}>Increment</button>
      <button onClick={()=> dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Navbar
