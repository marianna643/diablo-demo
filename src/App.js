import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import TopMenu from './components/TopMenu/TopMenu';
import LoginPage from "./pages/LoginPage";
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import MyDemosPage from './pages/MyDemosPage';
import DemoUpload from './pages/DemoUpload';
import React from 'react';
import './App.css';

function App() {
  return (
      <Router>
        <Switch>
            <Route exact path="/">
                <LoginPage />
            </Route>
            <TopMenu />
              <Route exact path="/home">
                <HomePage />
              </Route>
              <Route path="/profile">
                  <ProfilePage />
              </Route>
              <Route path="/my-demos">
                  <MyDemosPage />
              </Route>
              <Route path="/demo-upload">
                  <DemoUpload />
              </Route>
        </Switch>
      </Router>
  );
}

export default App;
