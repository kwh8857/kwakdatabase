import React from "react";
import "./css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Main";
import Todo from "./Todo";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main}></Route>
        <Route path="/todo" exact component={Todo}></Route>
      </Switch>
    </Router>
  );
}

export default App;
