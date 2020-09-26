import React from 'react';
import {BrowserRouter as Router, Switch, Redirect, Route} from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import "./App.css";

function App() {
  return (
    <Router>
    <div className = "app">
      <Switch>
        <Route exact path = "/">
          <Redirect to = "/Login" />
        </Route>
        <Route path='/Login' component={Login} />
        <Route path='/Register' component={Register} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
