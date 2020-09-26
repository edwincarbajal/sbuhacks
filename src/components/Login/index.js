import React from 'react';
import { Link } from 'react-router-dom';
import "./login.css";

const LoginForm = (props) => {
  const {email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        emailError,
        passwordError} = props;

        return (
          <div className = "LoginForm">
            <label> Username </label>
            <input
              type = "text"
              autoFocus
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p>{emailError}</p>
            <label> Password </label>
            <input
              type = "password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p>{passwordError}</p>
            <input onClick = {handleLogin} className="submit-btn" type="submit" value="Login" />
            </div>
        );
};

function Login(props) {

  return (
    <div className = "login">
      <h1 className = "title">Townhall</h1>
      <LoginForm {...props} />
      <p className="prompt-create-user clickable"> <Link className = "link" to='/Register'>Don't Have an Account?</Link></p>
    </div>
  );
}

export default Login;
