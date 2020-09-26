import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Login PAGE
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          LOGIN
        </a>

        <Link to='/Logout'>Logout</Link>

      </header>
    </div>
  );
}

export default Login;
