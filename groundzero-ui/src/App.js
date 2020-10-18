import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Registerpage from "./components/Loginandsignin";
import Loginpage from "./components/Loginpage";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path="/">
                    {/* <Route exact path="/" component={GlobalDashboard} /> */}
                    <LandingPage/>
                    {/*<Dashboard/>*/}
                </Route>
                {/* <Route path="/live">
          <GlobalHeader />
          <MyLiveClasses />
        </Route>

        <Route exact path="/discussionForm" component={Discuss} />
        <Route exact path="/login" component={Loginandsignin} /> */}

                {/*<Route exact path="/detail">
                    <Coursedetail/>

                </Route>
                <Route exact path="/login">
                    <Loginandsignin/>

                </Route>
                <Route exact path="/landingpage">
                    <LandingPage/>

                </Route>*/}
                <Route exact path="/register">
                    <Registerpage />
                </Route>
                <Route exact path="/login">
                    <Loginpage/>
                </Route>
            </Router>
        );
    }
}

export default App;
