import ColorContext from "../contexts/color";
import React,{useContext} from 'react'

const ColorBox=()=>{
  const {state} = useContext(ColorContext)
  return(
    <div>
      {value=>(
        <><div
          style={{
            width:'300px',
            height:'300px',
            background:state.color
          }}
        />
        <div 
          style={{
            width:'32px',
            height:'32px',
            background:state.subcolor
        }}
        />
        </>
      )}
    </div>
  )
}
export default ColorBox