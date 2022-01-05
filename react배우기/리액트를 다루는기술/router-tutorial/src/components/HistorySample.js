import React,{Component} from 'react'

class HistorySample extends Component{
  handleGoback = ()=>{
    this.props.history.goBack()
  }
  handleGoHome = ()=>{
    this.props.history.push('/')
  }
  componentDidMount(){
    this.unblock = this.props.history.block('정말 떠나시나요')
  }
  componentWillUnmount(){
    if (this.unblock){
      this.unblock()
    }
  }
  render(){
    return(
      <div>
        <button onClick={this.handleGoback}>뒤로</button>
        <button onClick={this.handleGoHome}>홈</button>
      </div>
    )
  }
}
export default HistorySample