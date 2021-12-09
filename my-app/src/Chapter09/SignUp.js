import React from 'react'

class SignUp extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:'',
      gender:1,
    }
  }
  handleChange = (event)=>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render(){
    var {name} = this.state;
    var {gender}= this.state;
    return (
      <form onSubmit={this.handleChange}>
        <label>
          name
          <input 
            type="text"
            name={'name'}
            value={name}
            onChange={this.handleChange}/>
        </label>
        <label>
          gender
          <select
            name={'gender'}
            value={gender}
            onChange={this.handleChange}>
            <option value={1}>MAN</option>
            <option value={0}>WOMAN</option>
          </select>
        </label>

        <input type="submit" value="Submit"/>
      </form>
    )
  }
}
export default SignUp