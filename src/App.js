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
import './App.css';
import TopMenuLogin from "./components/TopMenu/TopMenuLogin";

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
            </Switch>
      </Router>
    </div>
  );
}

export default App;
