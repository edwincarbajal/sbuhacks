import React from 'react';
import { Link } from 'react-router-dom';
import "./register.css";

const RegisterForm = (props) => {
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
            <input onClick = {handleSignup} className="submit-btn" type="submit" value="Sign Up" />
            </div>
        );
};

function Register(props) {
  return (
    <div className = "register">
      <h1 className = "title">Townhall</h1>
      <RegisterForm {...props} />
      <p className="prompt-create-user clickable"> <Link className = "link" to='/Login'>Already Have an Account?</Link></p>
    </div>
  );
}

export default Register;
