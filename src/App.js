import React from "react"
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";

function App() {
  return (
    <Router>
            <Switch>
            <Route path="/login">
            <div>
            <h1>this is the login screen</h1>
            </div>
            </Route>
            <Route path="/">
            <HomeScreen/>
            </Route>
            </Switch>
    </Router>
  );
}

export default App;
