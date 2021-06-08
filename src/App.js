import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import React from 'react';
import TopMenu from './components/TopMenu/TopMenu';
import TopMenuLogin from './components/TopMenu/TopMenuLogin';
import Login from "./pages/Login";
import Home from './pages/Home';
import Profile from './pages/Profile';
import MyDemos from './pages/MyDemos';
import DemoUpload from './pages/DemoUpload';
import './App.css';

function App() {
  return (
      <Router>
        <Switch>
            <Route exact path="/">
                <TopMenuLogin />
                <Login />
            </Route>
            <TopMenu />
              <Route path="/home">
                <Home />
              </Route>
            <TopMenu />
              <Route path="/profile">
                  <Profile />
              </Route>
            <TopMenu />
              <Route path="/my-demos">
                  <MyDemos />
              </Route>
            <TopMenu />
              <Route path="/demo-upload">
                  <DemoUpload />
              </Route>
        </Switch>
      </Router>
  );
}

export default App;
