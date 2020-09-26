import React from 'react';
import { Link } from 'react-router-dom';
import "./choose.css";

function Choose(handleLogout) {

  return (
    <div className = "choose">
      <h1 className = "title">Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>

    </div>
  );
}

export default Choose;
