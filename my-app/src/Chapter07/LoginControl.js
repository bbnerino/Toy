import React from "react";
import Greeting from "./Greeting";

function LoginButton(props){
  return (
    <button onClick={props.onClick}>
      LOGIN
    </button>
  )
}

function LogoutButton(props){
  return (
    <button onClick={props.onClick}>
      LOGOUT
    </button>
  )
}

class LoginControl extends React.Component{
  constructor(props){
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this); 
    this.handleLogoutClick = this.handleLogoutClick.bind(this); 
    this.state = {isLoggedIn:false};
  }


  handleLoginClick() {
    this.setState({isLoggedIn:true})
  }

  handleLogoutClick(){
    this.setState({isLoggedIn:false})
  }
  render(h) {
    const isLoggedIn = this.state.isLoggedIn;
    let button
    if (isLoggedIn){
      button = <LogoutButton onClick={this.handleLogoutClick}/>
    }else{
      button = <LoginButton onClick={this.handleLoginClick}/>
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
        {isLoggedIn &&
        <div>
          <h5>{new Date().toLocaleString()}</h5>
          <h5>{'how are u'}</h5>
        </div>
        }
      </div>
    )
  }
}
export default LoginControl