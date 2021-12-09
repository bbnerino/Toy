import React from "react";

function FancyBorder(props){
  return (
    <div style={Object.assign(props.style,{
      display:'inline-block',
      borderStyle:'solid',
      borderWidth:2,
      borderColor:'#80d900',
      borderRadius:16,
      textAlign:'center'
    })}>
      <div style={{
        padding:8,
        backgroundColor:'#80d900',
        borderTopLeftRadius:12,
        borderTopRightRadius:12
      }}>
        <span style={{fontSize:16,}}>
          {props.title}
        </span>
      </div>
      <div style={{marginTop:8}}>
        {props.children}
      </div>
    </div>
  )
}






