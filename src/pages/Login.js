import React from 'react';
import '../styles/login.scss';
import {ReactComponent as Logo} from '../assets/icons/logo.svg';
import {ReactComponent as Background} from '../assets/icons/wheelchair.svg';
import {NavLink} from 'react-router-dom';


function Login() {
  return (
    <div className="rectangle">
      <div className="background">
        <Background />
      </div>
      <div className="header">
        <Logo />
        <span className="green">Care</span><span className="dark-green">Focus</span>
      </div>

        <div className="details">
          <div class="welcome">Welcome Back</div>
          <label for="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required />
          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required/> 
          <button className="forget">Did you forget your password?</button>
          <NavLink to="/dashboard" className="login">Log in</NavLink>
        </div>
    </div>    
  );
}

export default Login;
