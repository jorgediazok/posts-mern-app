import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return <React.Fragment>{isLogged ? <Home /> : <SignUp />}</React.Fragment>;
}

export default App;
