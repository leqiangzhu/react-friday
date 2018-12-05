import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (

    <div className="container">
      <style jsx>{`
        ul {
       
        }
        li{
            font-size: 14px;
            display: inline-block;
            margin-right: 75px;
            padding: 5px;
            color:white;
        }
        img {
         width:9%;
        }
      `}</style>
      <div className="jumbotron">
        <ul>
          <li>
            <Link to="/"><img src='https://static1.squarespace.com/static/5a052abcb0786917d3590687/t/5a13b0ddf9619a97a130b0aa/1538056740756/?format=1500w'></img>
            </Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/event">Event</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/newtap">Add</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>



        </ul>
      </div>
    </div>
  );
}

export default Header;

