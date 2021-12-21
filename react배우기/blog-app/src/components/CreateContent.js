import React, {Component} from 'react'

class CreateContent extends Component{
  render(){
    return(
      <article>
        <h2>CreateContent</h2>
        <form action="/create_process" method="post"
          onSubmit={function(e){
            e.preventDefault();
            this.props.onSubmit(
              e.target.title.value,
              e.target.desc.value
            )
          }.bind(this)}
        >
          <p><input type="text" name="title" placeholder="제목"></input></p>
          <p><textarea name="desc" placeholder="내용"></textarea></p>
          <button type="submit">submit</button>
        </form>
      </article>
    )
  }
}

export default CreateContent