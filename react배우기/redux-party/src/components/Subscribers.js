import React from 'react'
import {connect} from 'react-redux'
import {addSubscriber,removeSubscriber} from '../redux/subscribers/actions'

const Subscribers = ({count,addSubscriber,removeSubscriber}) => {
  return (
    <div className="items">
      <h2>구독자 수 :{ count }</h2>
      <button onClick={()=> {addSubscriber()}}>구독하기</button>
      <button onClick={()=>{removeSubscriber()}}>구독취소</button>
    </div>
  )
}
const mapStateToProps =(state)=>{
  return {
    count:state.subscribers.count
  }
}
const mapDispatchToProps ={
  addSubscriber,
  removeSubscriber
}
export default connect(mapStateToProps,mapDispatchToProps)(Subscribers)
