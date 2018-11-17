import React from 'react';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import MasterKegList from '../components/Tap';
import Header from './Header';
import Error404 from './Error404';




function App(){
  var styles = {
  };
  return (
    <div style={styles}>
      <style jsx>{`
        font-family: Helvetica;
      `}</style>
      TapRoom-React
      <Header/>
      <Switch>
        <Route exact path='/' component={MasterKegList} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

//App.propTypes = {
//};

export default App;
