import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';


export const UserContext = createContext();

function App() {
  // const [data, setData] = useState(fakeData);
  const [loggedInUser, setLoggedInUser] = useState([]);
  // console.log(data);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route>
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
