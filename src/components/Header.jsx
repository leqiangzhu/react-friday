import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div className="container">
    <div className="jumbotron">
      <h1>Tap Room</h1>
      <div>welcome!!!</div>
      <Link to="/">Home</Link> | <Link to="/schedule">Schedule</Link> | <Link to="/produce">Produce</Link>
      
    </div>
    </div>
  );
}

export default Header;

