import firebase from "firebase";
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import LoginScreen from "./Screens/AuthProcess/LoginScreen";
import SignUpScreen from "./Screens/AuthProcess/SignUpScreen";
import { auth, init } from "./Fire";
import Recover from "./Recovery/Recover";
import VerifyUser from "./User/VerifyUser";
import MyAccount from "./Screens/MyAccount/MyAccount";
import AdminDashboard from "./Screens/Admin/AdminDashboard";

const Context = React.createContext();
function App() {
  const [user, setUser] = useState(null);
  if (firebase.apps.length == 0) {
    init();
  }
  auth.onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    }
  });

  const HomeStuff = () => {
    if (user) {
      if (user.emailVerified) {
        return <HomeScreen />;
      } else {
        return <VerifyUser />;
      }
    } else {
      return <HomeScreen />;
    }
  };
  return (
    <Context.Provider value={user}>
      <Router>
        <Switch>
          <Route path="/login">
            <LoginScreen />
          </Route>
          <Route path="/signup">
            <SignUpScreen />
          </Route>
          <Route path="/recovery">
            <Recover />
          </Route>
          <Route path="/myAccount">
            <MyAccount />
          </Route>
          <Route path="/Admin">
          <AdminDashboard />
        </Route>
          <Route path="/">
            <HomeStuff />
          </Route>
        </Switch>
      </Router>
    </Context.Provider>
  );
}
export { Context };
export default App;
