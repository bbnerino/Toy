import Head from "next/head"
import { useState } from "react"
import Seo from "../components/Seo"

const Potato = ()=>{
  const [counter,setCounter] = useState(0)
  return (
    <div>
      <Seo title='ABOUT'/>
      <h1>어바웃</h1>
      <h3>카운터:{counter}</h3>
      <button onClick={()=>{setCounter(counter+1)}}>
        +1
      </button>
      <button onClick={()=>{setCounter(counter-1)}}>
        -1
      </button>
    </div>
  )
}
export default Potato