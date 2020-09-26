import React from 'react';
import { Link } from 'react-router-dom';
import "./login.css";

function Login() {
  return (
    <div className = "login">
      <h1 className = "title">Townhall</h1>
      <p className="prompt-create-user clickable"> <Link className = "link" to='/Register'>Don't Have an Account?</Link></p>
    </div>
  );
}

export default Login;
