import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Event from './Event'
import reportWebVitals from './reportWebVitals';
import Greeting from './Chapter07/Greeting'
import LoginControl from './Chapter07/LoginControl'
import AttendanceBook from './Chapter08/AttendanceBook'
import SignUp from './Chapter09/SignUp'
import Calculator from './Chapter10/Calculator'

ReactDOM.render(
  <React.StrictMode>
    <Greeting isLoggedIn={true}/>
    <LoginControl></LoginControl>
    <AttendanceBook></AttendanceBook>
    <Calculator></Calculator>
    <SignUp></SignUp>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
