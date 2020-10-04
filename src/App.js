import React, { createContext, useEffect, useState } from 'react';
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
  const [data, setData] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState([]);

 
  // console.log(data);
  useEffect(() => {
      fetch('http://localhost:5000/events')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return (
    <UserContext.Provider value={{value1:[data, setData], value2: [loggedInUser, setLoggedInUser]}}>
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
          <Route path="/userEvents">
            <SingleUserEvents />
          </Route>
         
          <PrivateRoute path="/title/:cardTitle">
            <Register />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
