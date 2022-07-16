import { useDispatch } from "react-redux";
import {useState }from 'react'
function Change() {
    const dispatch = useDispatch()
    const [val,setVal] = useState('')
    return (
        <div>
            <input value={val} 
            onChange={(e)=>{setVal(e.target.value)}}>
            </input>
            <button 
             onClick={()=>{dispatch({
                type:"PLUS",
                value:val
            })}}>올라가유</button>
        </div>
      );
}

export default Change;