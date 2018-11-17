import React from 'react';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import MasterKegList from '../components/Tap';
import Header from './Header';
import Error404 from './Error404';
import Home from './Home';
import NewTapForm from './NewTapForm'
import Event from './Event'
import About from './About'
//import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';




function App(){
  
  return (
    <div>
      <style jsx>{`
      .html-warp{
    
      }
      font-family: Helvetica;
      `}</style>
  <div className="html-warp">

  
      <Header/>
      <Switch>
        <Route exact path='/menu' component={MasterKegList} />
        <Route exact path='/' component={Home} />
        <Route exact path='/newtap' component={NewTapForm} />
        <Route exact path='/event' component={Event} />
        <Route exact path='/about' component={About} />
       
        <Route component={Error404} />
      </Switch>
      </div>
    </div>
  );
}

//App.propTypes = {
//};

export default App;
