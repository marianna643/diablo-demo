import {
    BrowserRouter as Router,
    Switch,
    Route, Link,
} from 'react-router-dom';
import React from 'react';
import Login from "./pages/Login";
import Home from './pages/Home';
import Profile from './pages/Profile';
import MyDemos from './pages/MyDemos';
import DemoUpload from './pages/DemoUpload';
import SignOut from './pages/SignOut';
import './App.css';



function App() {
    return (
        <div className="App">
        <Router>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route path="/home">
                    < Home />
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
            </Switch>
      </Router>
    </div>
  );
}

export default App;
