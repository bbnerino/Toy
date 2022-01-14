import React, { useState } from 'react'
import {connect} from 'react-redux'
import { addView,removeView } from '../redux'
const Views = ({count,addView,removeView}) => {
  const [number,setNumber] = useState(1)
  const onSubmit = (e)=>{
    e.preventDefault();
    addView(number)
  }
  return (
    <div>
      <br/><br/>
      <button onClick={()=>{addView()}}>밑에값 올리기이</button>
      <button onClick={()=>{removeView()}}>밑에값 내리기이</button>
      <div>
       <h1> VIEWS :{count}</h1>
      </div>
      <form onSubmit={onSubmit}>
        <input value={number} onChange={(e)=>setNumber(e.target.value)}/>
        <br/>{number}
        <button 
        type='submit'
        style={{backgroundColor:"yellow",border:"none",cursor:"pointer"}}>만큼 올리기</button>
      </form>
    </div>
  )
}

const mapStateToProps = ({views})=>{
  return {
    count:views.count
  }
}
const mapDispatchToProps = {
  addView:(number)=>addView(number),
  removeView
}

export default connect(mapStateToProps,mapDispatchToProps)(Views)
