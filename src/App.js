import React, { Component } from 'react';
import {Route } from 'react-router-dom';
import './App.css';
import Nav from './component/Nav/Nav';
import routes from './routes';


class App extends Component {

  render() {
    
    return (
      <div className="App">
          <Route path={['/new','/Post:postid','/dashboard']} component={Nav}/>
          {routes}

      </div>
    );
  }
}

export default App;
