import React from 'react';
import '../styles/login.scss';

function Login() {
  return (
    <div className="rectangle">
      <div class="header">
        <img src="https://source.unsplash.com/jEK8iLdSaPc/1600x900" alt="Logo" class="logo"/>
      </div>
        <div class="welcome">Welcome Back</div>

        <div class="uname">
          <label for="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required />
       </div>

        <div class="psw"><label for="psw"><b>Password</b></label></div>
        <div class="psw">
          <input type="password" placeholder="Enter Password" name="psw" required/> 
        </div>
        <div class="forget"><a href="#">Forgot password?</a></div>

        <div class="login">
          <button type="button" class="button">Log in</button>
        </div>
    </div>    
  );
}

export default Login;
