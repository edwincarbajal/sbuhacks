import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/Login';
import Logout from './components/Logout';

function App() {
  return (
    <Router>
        <div>
          <Route exact path='/Login' component={Login} />
          <Route path='/Logout' component={Logout}/>
          </div>
    </Router>
  );
}

export default App;
