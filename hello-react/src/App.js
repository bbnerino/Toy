import React,{Component} from "react";
import Mycomponent from "./MyComponent";
import Counter from "./Counter"
import Say from "./Say";
class App extends Component{
  render(){
    const name ="heyhey"
    return (
      <>
        <div>{name}</div>
        <Counter></Counter>
        <Say></Say>
        <Mycomponent num={2} name="스트링" >여기적히는값</Mycomponent> 
      </>
    )
  }
}

export default App;
