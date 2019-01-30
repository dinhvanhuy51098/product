import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Add from './components/Add';
import Home from './components/Home';
import Edit from './components/Edit';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      
   };
  }
  
  render() {
    
    return (
      <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={Add}/> 
        <Route exact path="/edit" component={Edit}/> 
      </div>
      </Router>
    );
  }
}

export default App;
