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
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Register from "./components/Login-Register/Register";
import Login from "./components/Login-Register/Login";
import './App.css';





function App() {
    return (
        <div className="App">
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/register" component={Register}>
                    <RegisterPage/>
                </Route>
                <Route  path="/login" component={Login}>
                    <LoginPage/>
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
