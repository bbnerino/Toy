import React,{Component} from "react";
// import Mycomponent from "./components/MyComponent";
// import Counter from "./components/Counter"
// import Say from "./components/Say";
// import EventPractice from './components/EventPractice'
// import ValidationSample from "./components/ValidationSample";
// import RefSample from "./components/RefSample";
import ScrollBox from "./components/ScrollBox";
import IterationSample from './components/IterationSample'

class App extends Component{
  render(){
    const name ="heyhey"
    return (
      <div style= {{textAlign:'center'}}>
        {/* <div>{name}</div>
        <ValidationSample></ValidationSample>
        <Counter></Counter>
        <Say></Say>
        <Mycomponent num={2} name="스트링" >여기적히는값</Mycomponent> 
        <EventPractice></EventPractice>     
        <RefSample></RefSample>  */}
        <ScrollBox ref={(ref)=>this.ScrollBox=ref}/>
  
        <button onClick={()=>this.ScrollBox.scrollToBottom()}>
            맨 밑으로
        </button>
        <IterationSample/>
      </div>
    )
  }
}

export default App;

