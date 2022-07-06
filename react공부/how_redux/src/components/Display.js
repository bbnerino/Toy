import React from 'react'
import {connect} from 'react-redux'
import { addSubscriber } from '../redux/subscribers/actions'
import { removeSubscriber } from '../redux/subscribers/actions'

const Display = ({count,addSubscriber,removeSubscriber}) => {
  return (
    <>
      <div>
        <div>DISPLAY : {count}</div>
        <button onClick={()=>addSubscriber()}>츄츄</button>
        <button onClick={()=>removeSubscriber()}>삭삭</button>
      </div>
      
    </>
  )
}

const mapStateToProps = (state)=>{
  return {
    count : state.subscribers.count
  }
}
const mapActionsToProps = {
  addSubscriber,
  removeSubscriber
}

export default connect(mapStateToProps,mapActionsToProps)(Display)
