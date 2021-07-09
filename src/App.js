import {
    BrowserRouter as Router,
    Switch,
    Route,
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
import './App.css';
import Demos from "./pages/Demos";
import PrivateRouting from "../src/routing/PrivateRouting";





function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/register">
                        <RegisterPage/>
                    </Route>
                    <Route exact path="/login">
                        <LoginPage/>
                    </Route>
                    <PrivateRouting path="/diablo">
                        < Diablo />
                    </PrivateRouting>
                    <PrivateRouting path="/profile">
                        <Profile />
                    </PrivateRouting>
                    <PrivateRouting path="/my-demos">
                        <MyDemos />
                    </PrivateRouting>
                    <PrivateRouting path="/demo-upload">
                        <DemoUpload />
                    </PrivateRouting>
                    <Route path="/sign-out">
                        <SignOut />
                    </Route>
                    <Route path="/terms-service">
                        <TermsOfService />
                    </Route>
                    <PrivateRouting path="/demos">
                        <Demos />
                    </PrivateRouting>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
