import React from "react";
import "./App.css";
import GlobalDashboard from "./components/GlobalDashboard";
import GlobalHeader from "./components/GlobalHeader";
import Mylive from "./components/Mylive";
import Courses from "./components/Courses";
import Discuss from "./components/Discuss";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <GlobalHeader />
      <GlobalDashboard />
      <Router>
        <Switch>
          <Route exact path="/live" component={Mylive}></Route>
          <Route exact path="/coursecatlog" component={Courses}></Route>
          <Route exact path="/discussionform" component={Discuss}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
