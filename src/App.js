import React, { useState } from 'react';
import './App.css'

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    // You can add your own logic for authentication, API calls, etc.
  };

  return (

    <div className="container">

      <div className="l-container">
        <ul>
            <li>About</li>
            <li>Privacy</li>
            <li>Terms of Use</li>
            <li>FAQ</li>
        </ul>
      </div>

      <div className="r-container">
        <p>Login to your<br/> student dashboard</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="USER ID"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          <input
            type="password"
            placeholder="PASSWORD"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <div className='base'>
            <input type="submit" value="Login" />
            <a href="#">Forgot User ID or Password</a>
          </div>
          
        </form>
      </div>

    </div>
  );
}

export default LoginPage;
