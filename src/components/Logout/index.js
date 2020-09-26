import React from 'react';
import { Link } from 'react-router-dom';

function Logout() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Logout Page
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          LOGOUT
        </a>

        <Link to='/Login'>LOGIN</Link>
      </header>
    </div>
  );
}

export default Logout;
