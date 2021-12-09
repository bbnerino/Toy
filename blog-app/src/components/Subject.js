import {Component} from 'react'
class Subject extends Component{
  render(){
    return (
      <div>
        <h1><a href="/" onClick={function(e){
          e.preventDefault()
          this.props.onChangePage()
        }.bind(this)} >
          {this.props.title}</a></h1>
        <p>{this.props.sub} 바보야</p>
      </div>
    )
  }
}
export default Subject  ;