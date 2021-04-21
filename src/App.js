import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'><Landing /></Route>
      </Switch>
  
    </div>
  );
}

export default App;
