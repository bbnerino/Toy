import { useSelector, useDispatch } from "react-redux";
import { decrement, increment ,incrementbyAmount } from "./counterSlice";
import { useState } from "react";

export const Counter =()=>{
  const count = useSelector(state=>state.counter.value)
  const dispatch = useDispatch()
  const [value,setValue] = useState("")
  const increaseNums = () =>{
    dispatch(incrementbyAmount(value))
    setValue("")
  }
  return (
    <div>
      <div>
        <button 
          aria-label="Increment value"
          onClick={()=>dispatch(increment())}
        >
          INCREMENT
        </button>
        <h3>{count}</h3>
        <button
          aria-label="Decrement value"
          onClick={()=> dispatch(decrement())}
        >
          DECREMENT
        </button>
        <br/>
        <input value={value} onChange={(e)=>setValue(e.target.value)}/>
        <span><button onClick={()=>increaseNums()}>{value}만큼 올리기</button></span>

      </div>
    </div>
  )
}
export default Counter