import PropTypes from 'prop-types'
import React,{Component} from 'react'

class Mycomponent extends Component{
  render(){
    const {name,num,children} = this.props
    return(
      <div>{name}{num}{children}</div>
    )
  }
}


Mycomponent.defaultProps={
  name:'우에에'
}
Mycomponent.propTypes ={
	name:PropTypes.string,
  num:PropTypes.number.isRequired
}
export default Mycomponent