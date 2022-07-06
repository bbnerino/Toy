import React, {Component} from 'react'

class UpdateContent extends Component{
  constructor(props){
    super(props);
    this.state ={
      id : this.props.data.id,
      title:this.props.data.title,
      desc: this.props.data.desc

    }
    this.inputFormhandler = this.inputFormhandler.bind(this)
  }
  inputFormhandler(e){
    this.setState({[e.target.name]:e.target.value})
  }
  render(){
    return(
      <article>
        <h2>Update</h2>
        <form action="/create_process" method="post"
          onSubmit={function(e){
            e.preventDefault();
            this.props.onSubmit(
              this.state.id,
              this.state.title,
              this.state.desc
            )
          }.bind(this)}
        >
          <input type="hidden" name="id" value={this.state.id}></input>
          <p><input type="text" name="title" placeholder="제목" 
          value={this.state.title} 
          onChange={this.inputFormhandler}></input></p>
          <p>
          <textarea name="desc" placeholder="내용" 
            value={this.state.desc} 
            onChange={this.inputFormhandler}>
          </textarea></p>
          <button type="submit">submit</button>
        </form>
      </article>
    )
  }
}

export default UpdateContent