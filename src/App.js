import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Register from './Components/Pages/Register';
import Login from './Components/Pages/Login';
import PrivateRoute from './Components/PrivateRoute';
import SingleUserEvents from './Components/Pages/SingleUserEvents';


export const UserContext = createContext();

function App() {
 
  const [loggedInUser, setLoggedInUser] = useState([]);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/userEvent">
            <SingleUserEvents />
          </Route>
          <PrivateRoute path="/register">
            <Register />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
