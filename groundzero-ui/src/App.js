import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Loginandsignin from "./components/Loginandsignin";
import Discuss from "./components/Discuss";
import GlobalDashboard from "./components/GlobalDashboard";
import GlobalHeader from "./components/GlobalHeader";
import MyLiveClasses from "./components/Mylive";
import Dashboard from "./components/Dashboard";
import Coursedetail from "./components/Coursedetail";
import LandingPage from "./components/LandingPage";
import Whatyouwill from "./components/Whatyouwill";
import Syllabus from "./components/Syllabus"

class App extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path="/">
                    {/* <Route exact path="/" component={GlobalDashboard} /> */}
                    <Dashboard/>
                </Route>
                {/* <Route path="/live">
          <GlobalHeader />
          <MyLiveClasses />
        </Route>

        <Route exact path="/discussionForm" component={Discuss} />
        <Route exact path="/login" component={Loginandsignin} /> */}

                <Route exact path="/detail">
                    <Coursedetail/>

                </Route>
                <Route exact path="/login">
                    <Loginandsignin />

                </Route>
                <Route exact path="/landingpage">
                   <LandingPage />

                </Route>
            </Router>
        );
    }
}

export default App;
