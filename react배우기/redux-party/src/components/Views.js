import React from 'react'
import {connect} from 'react-redux'
import { addView,removeView } from '../redux/views/actions'
const Views = ({count,addView,removeView}) => {
  return (
    <div>
      <div>
        VIEWS :{count}
      </div>
      <button onClick={()=>{addView()}}>올리기이</button>
      <button onClick={()=>{removeView()}}>내리기이</button>
    </div>
  )
}

const mapStateToProps = ({views})=>{
  return {
    count:views.count
  }
}
const mapDispatchToProps = {
  addView,
  removeView
}

export default connect(mapStateToProps,mapDispatchToProps)(Views)
