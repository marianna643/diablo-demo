import {
    BrowserRouter as Router,
    Switch,
    Route, Link,
} from 'react-router-dom';
import React from 'react';
import Home from "./pages/Home";
import Diablo from './pages/Diablo';
import Profile from './pages/Profile';
import MyDemos from './pages/MyDemos';
import DemoUpload from './pages/DemoUpload';
import SignOut from './pages/SignOut';
import TermsOfService from "./pages/TermsOfService";
import './App.css';




function App() {
    return (
        <div className="App">
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/diablo">
                    < Diablo />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/my-demos">
                  <MyDemos />
                </Route>
                <Route path="/demo-upload">
                  <DemoUpload />
                </Route>
                <Route path="/sign-out">
                    <SignOut />
                </Route>
                <Route path="/terms-service">
                    <TermsOfService />
                </Route>
            </Switch>
      </Router>
    </div>
  );
}

export default App;
