import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { SignUpFirst, SignUpSecound, Profile, HomePage } from "./pages";

function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/sign-up-first">
          <SignUpFirst />
        </Route>
        <Route path="/sign-up-secound">
          <SignUpSecound />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
