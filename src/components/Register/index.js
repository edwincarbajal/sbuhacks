import React from 'react';
import { Link } from 'react-router-dom';
import "./register.css";

function Register() {
  return (
    <div className = "register">
      <h1 className = "title">Townhall</h1>
      <p className="prompt-create-user clickable"> <Link className = "link" to='/Login'>Already Have an Account?</Link></p>
    </div>
  );
}

export default Register;
