import React from 'react'
import axios from 'axios';
import style from '../styles/login.scss';
import { Link } from 'react-router-dom';

const loginSubmit = (navigate) => {
    const user = document.getElementById('username');
    const pass = document.getElementById('password');
    if (!user.value || !pass.value) {
      if (!user.value) {
        user.style.borderColor = 'red';
      }
      if (!pass.value) {
        pass.style.borderColor = 'red';
      }
    } else {
      sendUser(user.value, pass.value, navigate);
    }
}

const sendUser = async (user, pass, navigate) => {
  const userData = { username: user, password: pass };
  const response = await axios.post('/login', userData);
  // all the data associated with that username
  const data = response.data;
  console.log(data, 'data');
  // create route to main page
  navigate('/room');
  return;
};

const Login = (props) => {

  return (
    <div id='login'>
      <div id="inner-login">
        <h1>Jushin</h1>
        <p>An Elegant Chat Reception App</p>
        <div id="login-form">
          <input id='username' type='text' placeholder='Username'></input>
          <input id='password' type='password' placeholder='Password'></input>
          <button id='login-submit' onClick={() => loginSubmit(props.navigate)}>Login</button>
        </div>
        <div id="sign-up">
          <Link to="/signup">Signup</Link>
        </div>
      </div>
    </div>
  )
}

export default Login;