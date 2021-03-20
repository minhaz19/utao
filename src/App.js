import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Nomatch from './components/Nomatch/Nomatch';
import VehicleDetail from './components/VehicleDetail/VehicleDetail';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();


function App() {
  const [loggedInUser,setLoggedInUser] = useState({})
  return (
      <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <PrivateRoute path="/destination/:info">
                <Detail></Detail>
            </PrivateRoute>
            <PrivateRoute path = "/detail/:id">
                <VehicleDetail></VehicleDetail>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
                <Nomatch></Nomatch>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
      
  );
}

export default App;





