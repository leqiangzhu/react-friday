import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

function Home(){
  return (
    <div>
    <style jsx>{`
        body {
       
        }
        img {
          top:0;
         width:100%;
        }
      `}</style>
    <div className="container">
    <img src='https://static1.squarespace.com/static/5856f0bf46c3c4926dfaed81/t/5b031b07562fa7bfe314ed5d/1526930233379/Front+Street+Taproom'></img>

    </div>
    </div>
  );
}

export default Home;