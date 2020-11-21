import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Registerpage from './components/Loginandsignin';
import Loginpage from './components/Loginpage';
import Add from './courseadding';
import Dash from './components/Dashboard';
import Co from './components/Courses';
import Live from './components/Mylive';
import Video from './components/VideoPage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/register">
            <Registerpage/>
          </Route>
          <Route exact path="/login" component={Loginpage}/>
          <Route exact path="/add">
            <Add/>
          </Route>
          <Route exact path="/dashboard" component={Dash}/>
          <Route exact path="/courses">
            <Co/>
          </Route>
          <Route exact path="/live">
            <Live/>
          </Route>

          <Route exact path="/video">
            <Video />
          </Route>

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
