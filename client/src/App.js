import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';

function App() {
  const [isLogged, setIsLogged] = useState(true);

  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          {!isLogged && <Redirect to="/login" />}
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
