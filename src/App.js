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
import EventList from './Components/Pages/EventList';
import Admin from './Components/Pages/Admin';
import NotMatch from './Components/NotMatch';


export const UserContext = createContext();

function App() {
  const [data, setData] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/events')
      .then(res => res.json())
      .then(data => setData(data))

    fetch('http://localhost:5000/userEvent')
      .then(res => res.json())
      .then(data => setEvents(data))
  }, [])

  return (
    <UserContext.Provider value={{ value1: [data, setData], value2: [loggedInUser, setLoggedInUser], value3: [events, setEvents] }}>
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
          <Route path="/events">
            <EventList />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <PrivateRoute path="/title/:cardTitle">
            <Register />
          </PrivateRoute>
          <Route path="*">
            <NotMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
