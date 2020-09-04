import React from "react";
import "./App.css";
import GlobalDashboard from "./components/GlobalDashboard";
import GlobalHeader from "./components/GlobalHeader";
import Mylive from "./components/Mylive";
import Courses from "./components/Courses";
import Discuss from "./components/Discuss";
import Loginandsignin from "./components/Loginandsignin";
import VerticalNav from "./components/VerticalNav";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      
      <Route exact path="/">
         <Route exact path="/" component={GlobalHeader}></Route> 
        <Route exact path="/" component={GlobalDashboard}></Route>        
      </Route>
      <Route exact path="/coursecatlog" component={Courses}></Route>
      <Route exact path="/discussionform" component={Discuss}></Route>
      <Route exact path="/login" component={Loginandsignin}></Route>
    </Router>
  );
}

export default App;
