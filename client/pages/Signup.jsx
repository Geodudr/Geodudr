const React = require("react");
import axios from 'axios';
import style from '../styles/signup.scss';
import { Link } from 'react-router-dom';

const createUser = async (user, pass, navigate) => {
    console.log(user, pass)
    console.log('signup')
    const response = await axios.post("/signup", {
      username: user,
      password: pass,
    });
    const data = response.data;
    navigate('/');
};

const signUpSubmit = (navigate) => {
    console.log('line 17')
    const user = document.getElementById('username');
    const pass = document.getElementById('password');
    const confirm = document.getElementById('confirm-pass');
    if (!user.value || !pass.value || !confirm.value) {
        console.log('line 21')
        if (!user.value) {user.style.borderColor = "red";}
        if (!pass.value) {pass.style.borderColor = "red";}
        if (!confirm.value) {confirm.style.borderColor = "red";}
    } else {
        if (pass.value !== confirm.value) {
            confirm.style.borderColor = "red";
        } else {
            console.log('line 28')
            createUser(user.value, pass.value, navigate);
        }
    }
}

const Signup = (props) => {
    return (
        <div id="signup">
            <div id="inner-signup">
                <h1>Jushin Sign up</h1>
                <div id="signup-form">
                    <input id="username" name="username" type="text" placeholder="Username"></input>
                    <input id="password" name="password" type="password"placeholder="Password"></input>
                    <input id="confirm-pass" name="confirm password" type="password" placeholder="Confirm Password"></input>
                    <div id='signup-submit'>
                        <button id="signup-button" onClick={() => signUpSubmit(props.navigate)} >Signup</button>
                        <Link to='/'>Back to Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;